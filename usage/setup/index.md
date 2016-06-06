---
layout: default
title: Setup
---

## Basic

In order to be able to use JTransc you first need install Haxe and make sure that `haxe` and `haxelib` binaries are available in path. You can grab the right version from here:

JTransc is meant to be used with Haxe >= 3.3, though it could work on 3.2 too.
[http://haxe.org/download/version/3.3.0-rc.1/](http://haxe.org/download/version/3.3.0-rc.1/)

Usually installers, put `haxe` and `haxelib` binaries on path. But in the case you are using non-installer versions, you have to put folder containing those programs in your path. Also You will have to execute `haxelib setup` to setup haxelib path.

You first have to install Haxe, and in order to use [gdx-backend-jtransc](https://github.com/jtransc/gdx-backend-jtransc/) you have to install lime and setup the targets you are going to use.
In order to install lime. You have to execute the following command: `haxelib setup lime`.

Commands required to generate language-specific binaries:

* C++: `haxelib install hxcpp`
* C#: `haxelib install hxcs`
* Java (inception): `haxelib install hxjava`

Update. After this issue is done [https://github.com/jtransc/jtransc/issues/43](https://github.com/jtransc/jtransc/issues/43), haxe is installed automatically at `$HOME/.jtransc/haxe/version/`

## Supported platforms

Gradle plugin provides two tasks per target: runXXX which runs application in debug mode (can be slow on C++), and distXXX which generates a release version of the application.

Debugging is still a work in progress. It will work with the [intelliJ plugin](/usage/intellij).

<table class="table table-striped">
    <thead>
        <tr>
            <th>Target</th>
            <th>Description</th>
            <th>Gradle</th>
            <th>Requirements</th>
            <th>Debuggable</th>
            <th>Limitations</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="6">Desktop targets</th>
        </tr>
        <tr>
            <td>Linux</td>
            <td>Native desktop 32/64bit application.</td>
            <td><code>runCpp</code>, <code>distCpp</code></td>
            <td>Linux operating system. <code>haxelib install hxcpp</code>, <code>haxelib run lime setup linux</code>.</td>
            <td><strong>Not yet</strong></td>
            <td>-</td>
        </tr>
        <tr>
            <td>Windows</td>
            <td>Native desktop 32/64bit application.</td>
            <td><code>runCpp</code>, <code>distCpp</code></td>
            <td>Windows operating system. <code>haxelib install hxcpp</code>, <code>haxelib run lime setup windows</code>.</td>
            <td><strong>Not yet</strong></td>
            <td>-</td>
        </tr>
        <tr>
            <td>OSX</td>
            <td>Native desktop 64bit application.</td>
            <td><code>runCpp</code>, <code>distCpp</code></td>
            <td>Mac OSX operating system. <code>haxelib install hxcpp</code>, <code>haxelib run lime setup mac</code>.</td>
            <td><strong>Not yet</strong></td>
            <td>-</td>
        </tr>
        <tr>
            <th colspan="6">Terminal targets</th>
        </tr>
        <tr>
            <td>Node.js</td>
            <td>Node.js application.</td>
            <td><code>runJs</code>, <code>distJs</code></td>
            <td>Node.js interpreter.</td>
            <td><strong>Yes.</strong> Using web inspector</td>
            <td></td>
        </tr>
        <tr>
            <td>PHP</td>
            <td>PHP application</td>
            <td><code>runPhp</code>, <code>distPhp</code></td>
            <td>A PHP interpreter.</td>
            <td><strong>Not yet</strong></td>
            <td></td>
        </tr>
        <tr>
            <th colspan="6">Web targets</th>
        </tr>
        <tr>
            <td>Javascript</td>
            <td>Browser application.</td>
            <td><code>runHtml5</code>, <code>distHtml5</code></td>
            <td>A modern browser</td>
            <td><strong>Yes.</strong> Using web inspector</td>
            <td>Can't access filesystem directly.</td>
        </tr>
        <tr>
            <td>Flash</td>
            <td>Adobe Flash SWF</td>
            <td><code>runSwf</code>, <code>distSwf</code></td>
            <td>A flashplayer executable / browser with flash plugin</td>
            <td><strong>Not yet</strong></td>
            <td>Can't access filesystem directly.</td>
        </tr>
        <tr>
            <th colspan="6">Mobile targets</th>
        </tr>
        <tr>
            <td>Android</td>
            <td>Android APK</td>
            <td><code>runAndroid</code>, <code>distAndroid</code></td>
            <td>An android device. <code>haxelib install hxcpp</code>, <code>haxelib run lime setup android</code></td>
            <td><strong>Not yet</strong></td>
            <td></td>
        </tr>
        <tr>
            <td>iOS</td>
            <td>iOS IPA</td>
            <td><code>runIos</code>, <code>distIos</code></td>
            <td>A iOS device. A OSX operating system. <code>haxelib install hxcpp</code>, <code>haxelib run lime setup ios</code></td>
            <td><strong>Not yet</strong></td>
            <td></td>
        </tr>
        <tr>
            <td>Tizen</td>
            <td>Tizen executable</td>
            <td><code>runTizen</code>, <code>distTizen</code></td>
            <td><code>haxelib install hxcpp</code>, <code>haxelib run lime setup tizen</code></td>
            <td><strong>Not yet</strong></td>
            <td></td>
        </tr>
    </tbody>
</table>
