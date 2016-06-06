---
layout: default
title: Home
---

<img src="/i/logo.svg" width="180" height="180" style="float:left;" />

## JTransc documentation

Jtransc (Java Trans Compiler) is an AOT (ahead of time compiler) that compiles .class and .jar files into a target executable file bundling all the required dependencies in a single file, without requiring a jitter or an external runtime. At the beggining it generated as3 and javascript, but right now there is a single target: haxe. This allows targeting js, as3, c++, c#, java, php and python. This in turn allows running the program on different platforms such as desktop, browsers and mobile.

<div style="clear:both"></div>

## Information:

* [<i class="fa fa-question-circle" aria-hidden="true"></i> What is JTransc](/about), about the [<i class="fa fa-code-fork" aria-hidden="true"></i> JTransc Architecture](/architecture), Lastest version: [![Maven Version](https://img.shields.io/github/tag/jtransc/jtransc.svg?style=flat&label=maven)](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jtransc-maven-plugin%22)
* You can also find information about [Minitemplates](/minitemplates) (a template engine to use when embedding stuff in JTransc)
* Discover how to do special stuff in some targets using [Annotations](/jtransc-rt-core/annotations) and [Optimized API](/jtransc-rt-core/optimized-api).

<div class="row">
    <div class="col-xs-6">
        <h2>How to use it:</h2>
        
        <a href="/usage/maven"><img src="/usage/maven/maven-logo-black-on-white.png" width="auto" height="96" /></a>
        <a href="/usage/gradle"><img src="/usage/gradle/gradle.png" width="auto" height="96" /></a>
        <a href="/usage/intellij"><img src="/usage/intellij/intellij.png" width="auto" height="96" /></a>
        
        <ul>
            <li>(<a href="/usage/commandline">Or with a terminal</a>)</li>
            <li>And you can find a <a href="/cookbook">Cookbook</a> with examples to do specific stuff.</li>
        </ul>
    </div>
    <div class="col-xs-6">
        <h2>What can generate:</h2>
        
        <a href="/targets"><img src="/targets/targets.png" width="350" height="350" /></a>
    </div>
</div>

<div class="row">
    <div class="col-xs-6">
        <h2>Examples:</h2>
        
        <p><a href="https://github.com/jtransc/jtransc-examples"><img src="/cookbook/spine_demo.jpg" width="196" height="196" /></a></p>

        <p>You can find a <a href="https://github.com/jtransc/jtransc-examples">repository with examples here</a></p>
    </div>
    <div class="col-xs-6">
        <h2>Contribute:</h2>
        
        <p>This site is hosted at github and has its own github repository, so you can fork it, and make a PR :)</p>
        
        <p><a href="https://github.com/jtransc/docs.jtransc.com">https://github.com/jtransc/docs.jtransc.com</a></p>
        
        <p>Also, pressing the pencil button available in each page, you can see the corresponding file on github.
        And github will provide another pencil button which will create a fork in your user so you can edit the file and do a PR.</p>
        
        <p>You can read <a href="/contributing">the complete information about <i class="fa fa-smile-o" aria-hidden="true"></i> contributing</a>.</p>
    </div>
</div>

## Social networks and news

* [Blog](http://blog.jtransc.com/) 
* [Twitter](http://twitter.com/jtransc)
* [Facebook](https://www.facebook.com/jtransc)
* [Google+](https://plus.google.com/b/108006925270550871685/108006925270550871685)
