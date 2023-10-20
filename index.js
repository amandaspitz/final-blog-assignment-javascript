document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("categoryFilter");
    const arrowElement = document.querySelector(".select-arrow");
    const categoryFilter = document.getElementById("categoryFilter");
    const toggleOrder = document.getElementById("toggleOrder");
    const blogPosts = document.getElementById("blogPosts");
    const postPage = document.getElementById("postPage");
    const postTitle = document.getElementById("postTitle");
    const postDate = document.getElementById("postDate");
    const postCategory = document.getElementById("postCategory");
    const postViews = document.getElementById("postViews");
    const postText = document.getElementById("postText");
    const postImage = document.getElementById("postImage");
    const backButton = document.getElementById("backButton");
    const logoButton = document.getElementById("logoButton");

    let ascendingOrder = true;
    toggleOrder.innerText = `Oldest ↑`;

    const blogData = [
        {
          title: "Back",
          text: "Yeap. We're back.  Its been a long time and much has changed. Throughout the past few years, I must have thought about Exploding Comics every single day. But it was last week when I was browsing TikTok, that a person I knew from the Dublin conventions commented saying he still missed my comics, that a fire started inside of me, and I thought: What the heck am I doing with my life, if not creating comics? This is part of what I have been since I was like 4. So I decided to combine the fact that I've been passionately studying software development, with the fact that I am a cartoonist and put EC back on track. If you are an old-time reader, I should tell you that everything is quite different, but as I noticed over the couple of storyboards I sketched, my sense of humor and punchline style have been pretty much the same. Can you expect more of the same? Yes. Also, my comics have always been 95% biographical, unless someone was writing the script for me. So I might have to tell you about a lot of not-so-funny situations and major changes I've been through. Still, if you're into simple, nonchalant small stories, this is your place. I missed you guys. A lot. One last thing: I put this whole text inside of a string in Javascript so the text won't have paragraphs 'till tomorrow. xD",
          image: "images/0001.png",
          views: 582,
          date: new Date("2023-03-15T08:00:00Z"),
          category: "Category 2",
        },
        {
          title: "Work and Stuff",
          text: "Bro the pandemic hit us hard.",
          image: "images/0002.png",
          views: 237,
          date: new Date("2023-03-08T14:30:00Z"),
          category: "Chapter 4",
        },
        {
          title: "The Curse",
          text: "I am this hypocrite we often talk about in social media.",
          image: "images/0003.png",
          views: 743,
          date: new Date("2023-03-10T10:15:00Z"),
          category: "Chapter 1",
        },
        {
          title: "A New Guy",
          text: "Oh, by the way, we have a new character, in the comic and in my life. We will eventually address that.",
          image: "images/0004.png",
          views: 395,
          date: new Date("2023-03-22T17:45:00Z"),
          category: "Chapter 3",
        },
        {
          title: "Mad Dawg",
          text: "Good morning people. I boldly put a bit of an archive of comics to get the page going, which will make me regret and curse once I run out of material to publish. From now on, the page should run on one comic per week, as it used to five years ago. You know, the internet is a strange place now. People read like fifty pages per minute, and I believe a page that publishes once a week will barely keep the usual readers interested, let alone attract new visitors. Im shoving this page down my friends and families throats. But as previously mentioned, this time Im not trying to break into the market or make my living out of it, so a lot of the pressure is off. This is like blogging about my dogs life, but with pictures. I am so happy and satisfied with all the positive feedback. I am also sooo happy to practice coding, and I am pretty satisfied with the work Ive done here so far. ATM I live in Curitiba, probably the best city in the world. I live in a tiny flat in a huge building, where I met some of the best friends a person could have. I have an amazing day job where I work alongside awesome people (ohhh, and they have a dress code, and its all black and white). Furthermore, I noticed a brutal change on my creative work, and even on my coding assignments. I do not feel like Im rushing to meet deadlines any more, I just feel like doing the things because I want to do them. My schedule is normally organized, and I dont feel like I am constantly letting myself down. I have a suspicion that I owe that to my incredible therapist, who has been with me for the past four years. (Still no paragraphs cause javascript told me so). ",
          image: "images/0005.png",
          views: 691,
          date: new Date("2023-03-02T09:20:00Z"),
          category: "Chapter 3",
        },
        {
          title: "Plump Dawg",
          text: "Is it supposed to be a Monday comic? Yes. Do I get overly excited and share it on Sunday? Maybe.",
          image: "images/0006.png",
          views: 126,
          date: new Date("2023-03-13T07:00:00Z"),
          category: "Chapter 1",
        },
        {
          title: "Lazy Dawg",
          text: "The dog always wants to go for walks. Unless it's 7am. I am absolutely swamped with work and javascript assignments, and that is why the website hasnt progressed one bit.",
          image: "images/0007.png",
          views: 368,
          date: new Date("2023-03-21T11:10:00Z"),
          category: "Chapter 2",
        },
        {
          title: "Chosen Dawg",
          text: "We had decided we would hold off a little before actually adopting, but then we saw her and it was love at first sight. We had some trouble to match the schedule with the angel who rescued her from the streets, but one Saturday I woke up and called her and she was coming to the city center so she decided to bring Garoa along. We were supposed to meet her to later decide whether we would adopt her or not, but we left home to meet up with the lady and casually bought a bag of dog food, dog biscuits, a little dog bed and some toys. Just because. She parked her car, Garoa got off, got the biscuits pack with her mouth and just pulled the leash towards the house, like she had lived with us all her life. This angel is called Meire, she does an amazing job with an association called Amor Sem Raça. If you are interested in helping her out, instagram.com/amorsemracaassociacao is her instagram. I plan on structuring a whole section of the website dedicated to helping her out, as she changes so many lives by rescuing dogs from the street and making her best to give each one a loving home.",
          image: "images/0008.png",
          views: 874,
          date: new Date("2023-03-12T15:55:00Z"),
          category: "Chapter 4",
        },
        {
          title: "The stork",
          text: "This is actually self-plagiarism. I wrote this very comic for old Exploding Comics when I first explored the idea of adding a pet as a third character back in the day. I don't like the old storyboards, I think my storytelling style was not quite there yet. I've been redrawing some of the comics that were already posted (looking at you 1 and 5), because I drew some of them in a hurry. About the website: look at the amazing job I did putting up Portuguese and English options with a button and all! (LIES - I asked the frontend senior that sits by my side to code the entire thing for me). However, he did use Javascript Vanilla cause that's what I was going for, but I will recode the whole website myself (this time I will do it myself, I promise) in React, so I will probably fuck up some things along the week. Bear with me, this thing will be a beauty once it's ready.",
          image: "images/0009.png",
          views: 510,
          date: new Date("2023-03-19T16:40:00Z"),
          category: "Chapter 2",
        },
        {
          title: "Love",
          text: "Fun fact: I did have a total meltdown the first night we got her, because I was feeling an excessive amount of love.",
          image: "images/0010.jpg",
          views: 319,
          date: new Date("2023-03-05T22:20:00Z"),
          category: "Chapter 3",
        },
        {
          title: "A Family",
          text: "We were just a couple, Garoa turned us into a family.",
          image: "images/0011.png",
          views: 642,
          date: new Date("2023-03-11T12:05:00Z"),
          category: "Chapter 1",
        },
        {
          title: "Door Handle",
          text: "This literally happened, and it was one of our first dates. So as many of you know, I started running a side project called Very Terrible Monsters, and you can find it on vtm dot explodingcomics dot com. I have been as busy as it gets, trying to make two webcomics work while I try to learn Object Orientation, and MY BROTHER I do not wish this on my worst enemy. I am going to be rather busy for the next couple of weeks trying to translate the goddamn classes into something that I can understand, but the good news is that I have on month and a half of strips prepared. So you will not run out of explodingcomics to read. Unfortunately I can't say the same for VTm, as it is a more mature project, way out of my comfort zone and much harder for me to make it work. Oh. Because I am not overwhelmed enough, I am also running a DnD adventure that was supposed to be every fortnight but turned weekly cause everyone is too excited.",
          image: "images/0012.png",
          views: 418,
          date: new Date("2023-03-07T18:30:00Z"),
          category: "Chapter 4",
        },
        {
          title: "Solution",
          text: "Things are not well, but I managed to pull through and keep the comic updated.",
          image: "images/0013.png",
          views: 587,
          date: new Date("2023-03-14T09:45:00Z"),
          category: "Chapter 2",
        },
        {
          title: "At Dungeons Bar",
          text: "So many things happened at this place. Some of them would have to be told at the 18+ page.",
          image: "images/0014.png",
          views: 762,
          date: new Date("2023-03-20T20:10:00Z"),
          category: "Chapter 1",
        },
        {
          title: "Princess",
          text: "We've been through a lot, I'll talk more when I have time.",
          image: "images/0015.png",
          views: 673,
          date: new Date("2023-03-03T13:25:00Z"),
          category: "Chapter 3",
        },
        {
          title: "Sexy Dude",
          text: "Such a charming flirt.",
          image: "images/0016.png",
          views: 419,
          date: new Date("2023-03-16T11:50:00Z"),
        },
        {
          title: "That Feeling",
          text: "So... I don't really feel like talking about my life at the moment but I feel some weird sense of responsibility to the people who read me, and as you are well aware I've been on a dark mood lately. Many things happened from the beginning of the year till now, but the context is that we are barely surviving, one day after another. Our salaries dropped, our bills increased, financially things are more difficult now than they've ever been during our life living together. A month and a half ago, we had a first degree relative falling sick, getting worse and passing away. During this time, I had to be alone with Garoa for some weeks. She got sick several times, because she is an emotional dog and missed her daddy. One night, she got sick on the only duvet I have. That was the night temperatures dropped to 4 degrees Celsius. Two days after, I had a burn on my finger getting infected so bad I nearly went to the hospital. All those battles I was fighting while living alone. Diogo came back home, and when we thought things would settle, we caught a neighbor beating up his dog. We spent the week filing police reports and trying to make people speak up so the police would act on it. Last Monday the police did act on it, they took the dog and got the guy arrested. But not an hour later, they called Diogo saying the entire responsibility of the whole thing was his and if he didn’t pick up the dog, they would release the animal on the street. Diogo went to the police station to rescue the dog, but the police let the guy sitting in handcuffs right in front of the station. So the guy saw Diogo, so now we are living in fear as we know for a fact that the guy is incredibly violent. In the middle of last week, we had another close relative hospitalized. Many times I thought I was being tested, Truman Show style. I am on my limit, once again. But I’m here, standing and fighting everyday cause I won’t back down. ",
          image: "images/0017.png",
          views: 938,
          date: new Date("2023-03-09T07:55:00Z"),
          category: "Chapter 4",
        },
        {
          title: "Parla!",
          text: "With all the fuckery of life, I almost missed this week's comic! But we're still punctual, 16 weeks of continuous updates. I'm really excited about the website, but I need to make urgent adjustments to it, like adding the contact page you've been asking for and a 'like' button. For that, I need to develop a database and a backend, and just thinking about it already gives me the chills, hahah! I'm working at my regular job, studying at night, and working on an academic project to revitalize a client's website, which will all be done in React. I love every one of these activities, but of course, there's little time left for passion projects. Furthermore, I promise I'll do my best not to miss the weekly comic. On a personal note, I appreciate all the sweet messages you sent me last week. Having support and affection from friends, family, and readers means everything to me. We had another normal week, and that's really excellent. Besides, I managed to sleep many hours this weekend, and you have no idea how much I enjoy that. heh.",
          image: "images/0018.jpg",
          views: 576,
          date: new Date("2023-03-18T19:15:00Z"),
          category: "Chapter 3",
        },
        {
          title: "Oh no",
          text: "We didn't foresee this kind of inconvenience.",
          image: "images/0019.jpg",
          views: 292,
          date: new Date("2023-03-06T23:40:00Z"),
          category: "Chapter 2",
        },
        {
          title: "Magical",
          text: "Intermission for a kiss.",
          image: "images/0020.jpg",
          views: 174,
          date: new Date("2023-03-17T08:30:00Z"),
          category: "Chapter 1",
        },
        {
          title: "Empty",
          text: "When we got together I had moved houses 13 times, and that kinda turns any person into a minimalistic individual.",
          image: "images/0021.jpg",
          views: 645,
          date: new Date("2023-03-04T10:55:00Z"),
          category: "Chapter 3",
        },
        {
          title: "Upside Down",
          text: "Two fart jokes in a three week spam, someone go get me an award already.",
          image: "images/0022.jpg",
          views: 531,
        },
        {
          title: "Them genes",
          text: "Float like a butterfly sting like a bee.",
          image: "images/0023.jpg",
          views: 296,
        },
        {
          title: "A couch",
          text: "The man was really happy when he bought this couch.",
          image: "images/0024.jpg",
          views: 479,
        },
        {
          title: "Pandemic",
          text: "Remember?",
          image: "images/0025.jpg",
          views: 893,
        },
        {
          title: "They shrank",
          text: "I started working on-site every day from this week on. My weekend was hectic, I am overwhelmed and guess what? Yeap. I completely forgot to post the comic yesterday. I hope my millions of readers managed to survive this Monday without their vital source of motivation.",
          image: "images/0026.jpg",
          views: 682,
        },
    ];
      

        function renderPosts(posts) {
        blogPosts.innerHTML = "";
        posts.forEach((post) => {
            const postElement = document.createElement("div");
            const truncatedText = post.text.length > 140 ? post.text.slice(0, 140) + "..." : post.text;
            postElement.innerHTML = `
                <span class='post-title'>${post.title}</span>
                <span class='post-views'>Views: ${post.views}</span>
                <img src="${post.image}" alt="${post.title}">
                <p class='post-text'>${truncatedText}</p>
                <span class='post-date'>Date: ${formattedDate}</span>
                <span class='post-category'>${post.category}</span>
            `;
            postElement.addEventListener("click", () => {
                postTitle.innerText = post.title;
                postDate.innerText = `Date: ${formattedDate}`;
                postCategory.innerText = `${post.category}`;
                postViews.innerText = `Views: ${post.views}`;
                postText.innerText = post.text;
                postImage.src = post.image;
                postPage.style.display = "block";
                backButton.style.display = "block";
                blogPosts.style.display = "none"; 
            });
            blogPosts.appendChild(postElement);
        });
    }

    arrowElement.addEventListener("click", function () {
        selectElement.focus();
      });
      
      selectElement.addEventListener("change", function () {
        arrowElement.innerText = "▼";
      });
      
      selectElement.addEventListener("blur", function () {
        arrowElement.innerText = "▼";
      });
    
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      
      const formattedDate = formatDate(new Date("2023-03-15T08:00:00Z"));
      

    backButton.addEventListener("click", () => {
        postPage.style.display = "none";
        backButton.style.display = "none";
        blogPosts.style.display = "flex";
    });

    logoButton.addEventListener("click", () => {
        postPage.style.display = "none";
        backButton.style.display = "none";
        blogPosts.style.display = "flex";
    });


    const categories = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"];
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.innerText = category;
        categoryFilter.appendChild(option);
    });

    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        if (selectedCategory === "all") {
            renderPosts(blogData);
        } else {
            const filteredPosts = blogData.filter((post) => post.category === selectedCategory);
            renderPosts(filteredPosts);
        }
    });

    toggleOrder.addEventListener("click", () => {
        ascendingOrder = !ascendingOrder;

        toggleOrder.innerText = `${ascendingOrder ? "Oldest ↑" : "Newest ↓"}`;

        if (ascendingOrder) {
            blogData.sort((a, b) => a.date - b.date);
        } else {
            blogData.sort((a, b) => b.date - a.date);
        }

        renderPosts(blogData);
    });

    renderPosts(blogData);
});