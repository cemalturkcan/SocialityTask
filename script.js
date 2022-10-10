import data from './data.json' assert {type: 'json'};


// post template
const createPost = function (dateForPost, msg, src, postLink, socialMediaLogo, postStatus) {
    return `<div class="post">
            <div class="posted-media" style="background: ${postStatus}">
               <a href="${postLink}" target="_blank">${socialMediaLogo}</a> 
      </div>
            <div class="post-inline">
                <div class="date-and-btns">
                    <div class="date-for-post">
                        ${dateForPost}
                    </div>
                    <div class="btns">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                            <image id="cancel" width="18" height="18" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABdUlEQVQ4jZ3UTW+OURDG8V/veAtFF2yoBRbSSFhZkoiUhZVkWFlZ+kISCxt2TtI1/Rb1UpVgIbppGql4i1AyMo88vYk8d2d7zvmfmeuamSm9aK11OI05HMO+uvERb/ECzyJic/zlFlBr7Siu4RA+4RU26vgATmA/1rAQEat/gVprp3ADX7CIpYj42ftolO0V7MHDiFj5A6pMbmEdDyLiQ7/kHvA8LuE77mVmU/XL7frh7gSQc7iKd5jBZ9wZpZqaLA6E3McjHE5GV+6kI0tDIBHxFU/r7VxXFr/uCzsBRLXAG8x21ScbQyFj8R7T3TbK6cdv57uqcWabkIyDyeiq7Y9XGwyCtNYym5PJ6Gp2pnF2YCYZZ0rj5R05gLiAy621nKeLk0Dq7nzN3fOuLFzAzoGQm9hdw7vZH9rr+IbHeBIRP/6hSUqQmeyqoX2ZZ/01cqTWSLZ9upnNNuqxdCeF3fvfNTIGG19ss2VExmixLacmWxYbfgEe/67dGqFMNQAAAABJRU5ErkJggg=="/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="20" viewBox="0 0 15 20">
                            <image id="delete" class="cls-1" width="15" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUCAYAAABSx2cSAAABC0lEQVQ4je3UPy9EQRQF8N+iILEimwg6iULiT9BtrdJQvVLhIyh9HDrF1WtJ1CRCQiWiUClQkCAyMiuT3bWhlLjNO+fce+bdmcydmiIiIvENTOuMG+xWVfXWygy0lYxl4ymeC30QS5jEbUusRcRUUdTAemoCT4U+jAoHuCv/vNmlxaqLlmK1JMm8hzVc4fIbUxkzmMf+pxYRWxHR/IEx1TYjYlv7gUXECGZxknMLOMMrlnFR1ve1LdzI+xpCPeN65gk3epl/Ff/mP2lOOE3MTp6o+4zTN/GEU/7rDWhdzxdMVFWVZvi6WLADR8Q4HkvzOVYiIvGHHp2mqzqHo9J8jFEsor+H+T2/MofwAbNCPZ1QdhN7AAAAAElFTkSuQmCC"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="21" viewBox="0 0 21 21">
                            <image id="options" class="cls-1" width="21" height="21" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABqElEQVQ4jbWVMUscURDHfy5yYGIpCDbmrEVB0O4kfSz/VSQWglUqP4kfQLBQsHrlWdqcZUASubR6NoJg50XB4gyj/4XH6il36jS7O2/m92bezJsdoY+klKaBWeALUAN6QAHcAedAW1LnOe8n0JTSJLBi52PgVNJttj4GzAAL3qwp6bIvNKU0Dyzb8KxfFpl93QEcSfr9BGrgErAv6d9rwMzvM/Ad+FWCiyzl5UGBIbbfBxrmPEKdQnNQYAXcNIeRlFJUtyFpbxhgLimlH3G+hdvm+K1AS3BmR4Hox8PKjuPAjaSev6OgoetKurcuAvokqZu5ngJfI/1NSVsZ8BuwCFwB2+7XNSDaJ9ps1/25AUy46geZ/2bhm5LLnN/DYcoR1q2r+3vK62T2pfSKrANKOfEzIr2IlB0hfnatv6rYl1JE+j+BncpVHOpMfYXXo1Ad3+W/5WLl8DHouqLrOepcgtOJ3doeDu8hwWkXkmKM1Twchhb714JXFunhink4DCz2WzHnsfKehy1gdVBwNqVa5Vx9r3kawD+l/uMnfwVe/UdFW4X9y/8o4D9o38XcyRNIkgAAAABJRU5ErkJggg=="/>
                        </svg>
                    </div>
                </div>
                <div class="post-text">
                    <p>
                          ${msg}
                    </p>
                </div>
                <div class="post-photo-div">
                    <img  src="${src}"; class="post-photo" onerror="this.onerror=null; this.src='meta/no-post-image.png'">
                </div>
                <div class="like-comment-share-views-sec">
                    <div class="social-stats" >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17">
                            <image id="likes" class="cls-1" width="17" height="17" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABI0lEQVQ4jaXTzSpFURjG8R8O+SwmEkoxMkC5ABmc5AaUOzBQrsUtyIC7kAkGFDIwkaQkEUm+v3pPa7DSOc5xPLVq772e9V97ve+zGorFoipqwxhesV/OWqhGwDRG0I5nHP80NNYA6cM2jjBczlAr5BK36KgHEsdowBW+0PRXSAtmsYM3dOGpnLGQRmf27QXvmE+LNtNmgzhDd+Z9jK4FYBE92cQnrtPuq/jABIbSmMq8ccStQgIs4y5NLCXQSspG6CCNnxrFXKWaXGSA3zSJk1rC9puifje15KSSelOx7/8DiVo2Y69eSGQogljKTSVIf/rdSopjjGM9XqKw0c6ZrBtxWx+wgPOs9bniPp2mPJUgaxjIHBvYTSmOHLSWgQT8sPSEb9QgOCAYqGrTAAAAAElFTkSuQmCC"/>
                        </svg>
                        <p class="likes">0</p>
                    </div>
                    <div class="social-stats" >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="16" viewBox="0 0 17 16">
                            <image id="comments" class="cls-1" width="17" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAoElEQVQ4je3UMQ5BQRSF4e+hIaJSaDQiKo1OK3kbUFqHdVHZAw2FShQSCrEFiYRMMk+h8TyduOXknv/eMzkzSZqmU1QUr1sQl3HCvgCmh3a2wRnrApB6gJS+sPGsP+TnISFsd/TRedO7wzIGbBLijlrQB8ghx7AGRqhigxaOuGSbzHJAEowxRDOerbL3lvdOguU5tui+6j79Aha4YhDB4AF2KRfzTjor8wAAAABJRU5ErkJggg=="/>
                        </svg>
                        <p class="comments">0</p>
                    </div>
                    <div class="social-stats" >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="18" viewBox="0 0 16 18">
                            <image id="shares" class="cls-1" width="16" height="18" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABS0lEQVQ4jY3Tz0vVURAF8I8m1iJdmP0ihHghuKiFiNhGoXqbVm3EheE/Z/izdRBiq8SViGCEqFEEgg91UaCQ4Q8G5gsi9d6dzeFyZ86dOWduW71eVxhdiOT7aOATfrcXFrfhLR7gS+IU2ksJerNoESuYx93oppTgLPF2YlfiaUdBcR/e4AKT+IHH2MJRM4JOvMRIJr9Df46yjPVIqghuYTRnDYX38Drv3+Nr5q1df6XjisLd2MYgxrCBJZw0my9EvJdzzuADZvPuc6viiuCiVVKzuFGr1eKVJxjGHbzAzdTlJ/62IpAiRUEPdrCKITzHLxz8j6By4U9aczW+p43jeIqPaeND7KeNZ1UH/4pzfMNuOvMqF+gkz4/iX5SscuzEQtodTs0lDoRmpX+hyju+hp0lfyHiMOeewCaepbCN0g5iV6LtIAlBA6dxfgmwwEZJfNEqhQAAAABJRU5ErkJggg=="/>
                        </svg>
                        <p class="shares">0</p>
                    </div >
                    <div class="social-stats">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="13" viewBox="0 0 25 13">
                            <image id="views" class="cls-1" width="25" height="13" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAYAAABcrsXuAAABrklEQVQ4ja2UzUtUYRTGf1ommIJfSYkM+IKMtBBNEUVaBIc2rtr1J7ZrHw+oSORCDURER5guoilKSlQTKUkcODNcLs6g0tlc7nve8zzP+XrbaGFm1gOMAsNAP9AFtAPXQA04B46ATNKPZkg3kpjZM2AKGCm4akHQHoR5OwQ2JZ20JDEzD1wI9XXQfeAAOAM6gW7gJ/AHeAKUgLEc6Rfgo6RaHfdBjsAvLwKDAb4GLEs6TCm5+lfAS2AcmAAGgIqkLKW0HTEeOwSUU0oX1Wr1eyMTM/OgueDbAz5Jugyfl+ZNgO4ApwH0HPgGvJd0HXcfAfNOElhrkrYemtkkMBu1XpW0VyhpKQg2JG3EWcXMfgPT4c/8MIStmNlJZD3nIl3lTASu30Dg1hvfrHCeFfwNC5z1+J9xkkr9x8zKxYCoNVHvvA0W/A0LnLr4ym160gG8jSHxYfBSPI37f4F3kq5a9aQtx16KCeoMdZvArjfVzHxUXwOPc4J/AR8kncVwlKNHXTHeS5J89O+0JxeRgb8Cvt2eUd9t9qTZxjvYi3ts/GdJx0W8//F2fXX1Td8u4B+N3axRYsvKkwAAAABJRU5ErkJggg=="/>
                        </svg>
                        <p class="views">0</p>
                    </div>
                </div>
            </div>
        </div>`
}

const instagram = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\n' +
    '  <image width="20" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABPUlEQVQ4jbWVsU4CURBFj2yw0Y7tTNzwG/IPfo+2wD8Y/8LYUJMYC0NiZy22KI3SbEKueXrBcQEhCJPM5uXOnZt58+a9RdLMc0kdSQNJY623sbkd537pHKQPcAbcAg2+7QN448cmXh0FLHGPvU7cc+B+Vtmr67mW1AxVr/Omc2SNHJc8E9tUKHlLUldSI4h2cB/0R2WZpFN7FvAn53Wdm2yAm/u+ROhQUlvSKBzPyFiKXVq0ZX7SGGPi8xKxvmOlpDt7aaxvTsxJGlol2Db+KKkIeGFM5mwkmHlrZUUsipbmZFXBmudoEubrBMiBB2DIog0dy80latSWJPzP9rXlaFPgCqgDN0ARYoWxujnThex9jM22g13lzwd726sXfX71Ug973v3FitNNfXqxL/bsd25v58/XXh7Y3f0CJD4Bw1rbt6hMkosAAAAASUVORK5CYII="/>\n' +
    '</svg>\n';
const facebook = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="23" viewBox="0 0 12 23">\n' +
    '  <image id="FacebookLogo" width="12" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAAl0lEQVQ4je2RMQoCQQxFnyIWisV6gj2D3sHak1npZfYWgo2dnZ2waP8lgpD5jKi1PpgiyU/4ySCp9hpJG0lnGTXxXNLBhU9qDbtX4mAQosQYuADTlLsBW+D4iGz6sjJ0lTVDSlqLr0CXE94wszjsFYyAdUosrD6xeh9Li8/Zu6W3hKXedvI9SuysrZ305B/7taV/w080AHf52+CU2rEG+wAAAABJRU5ErkJggg=="/>\n' +
    '</svg>\n'

const twitter = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="15" viewBox="0 0 20 15">\n' +
    '  <image width="20" height="15" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAABOElEQVQ4jaWTPS9EURiEH8RXiN1INlEKiUKjJCq9RqGg0m5J4w9sSc2fkEiIgmjoqLYQhUgkChFfyRYsm9hHjtwrd9d+WZO85xbvZM7MzRnUMOno22yW1LxaVl/VHXVc7VHn1elA6lZv1cUmYmvWRim64EgdCcTRBG1T7a8hllLf6ggaCV6o64E8qH4kljfqShQjFpxtIBYjJKAjHMA2kKUSz8AxcAYMADnqowCkv7fqsJpTCy24qIerOE04utSXf4gF7MaCncAnsNEgTis4/OEkfvyq+tSGu6KaSTqM0QuU23C3BTzWcpiKWvAXXKtDyTdb/YD71Kx60oLogzpZXYJk5BjvwESTmHlgBrj8tVEX1D31vEm9Au6jRiRbVDFxU8aAZWAOmAIy0X1F4A44BQ6AfaBU1zfwBWVV5rcSBzU+AAAAAElFTkSuQmCC"/>\n' +
    '</svg>\n'

const statusPublished = '#ababab';
const statusScheduled = '#3abf82';
const statusNeedApproval = '#f5bd38';
const statusError = '#f9634f';
const statusNotes = '#66b0f0';



//posts date template
const postsAndDatesStr = "<div class=\"posts-and-dates\"></div>";


document.querySelector('main').insertAdjacentHTML("beforeend", postsAndDatesStr)

const postsAndDates = document.querySelector('.posts-and-dates')

const createPostsByTime = function () {
    let postsByTime = `<div class=\"postsByTime\"></div>`;
    return postsAndDates.insertAdjacentHTML("beforeend", postsByTime)
}

const createDate = function (date) {
    return `<div class=\"date\">${date}</div>`;
}
const createPostsSection = function () {
    return `<div class="posts"></div>`;
}


function findUrls(text) {
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
}

const options = {
    minute : 'numeric',
    hour: 'numeric',
    month: 'long',
    year : 'numeric',
    day : 'numeric',
}
const optionsForH1 = {
    month: 'long',
    year : 'numeric',
    day : 'numeric',
}

const formatMovementDate = function(date, options) {
    return new Intl.DateTimeFormat('en-GB', options).format(date);
}

const findSocialMedia = function (text) {
    let socialMediaIcon;

    if (text.includes('instagram'))
        return socialMediaIcon = instagram;
    if (text.includes('facebook'))
        return socialMediaIcon = facebook;
    if (text.includes('twitter'))
        return socialMediaIcon = twitter
}

const findStatusColor = function (statusCode) {
    let color;
    if (statusCode === 0)
        return color = statusNeedApproval;
    if (statusCode === 1)
        return color = statusScheduled;
    if (statusCode === 2)
        return color = statusNotes;
    if (statusCode === 3)
        return color = statusPublished
    if (statusCode === 4)
        return color = statusError;
}


const fillPosts = function (data, index) {
    let posts = document.querySelectorAll(".posts");
    let socialMediaIcon;
    let color;
    for (const dataElement of data) {
        //find social media
       socialMediaIcon = findSocialMedia(dataElement.account.channel);
        // status colors
        color = findStatusColor(dataElement.status);

        let date =  formatMovementDate(new Date(dataElement.created_at.slice(0, 16)), options)
        let readyPost = createPost(date.replace('at', ""), findUrls(dataElement.entry.message), dataElement.entry.image[0], dataElement.link, socialMediaIcon, color)
        posts[index].insertAdjacentHTML("beforeend", readyPost)
    }
}


const getPosts = function (json) {
    let dates = Object.keys(data.posts_by_date).reverse();
    let list =  Object.values(data.posts_by_date).reverse()
    for (let i = 0; i < list.length; i++) {
        createPostsByTime();
        let postsByTime = document.querySelectorAll(".postsByTime");
        let date =  formatMovementDate(new Date(dates[i]), optionsForH1)
        postsByTime[i].insertAdjacentHTML("beforeend", createDate(date))
        postsByTime[i].insertAdjacentHTML("beforeend", createPostsSection())
        let posts = document.querySelectorAll(".posts");
        fillPosts(list[i], i)

    }
}

getPosts(data)





