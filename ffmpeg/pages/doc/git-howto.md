> Commit-pinned source for FFmpeg master: [doc/git-howto.texi](https://github.com/FFmpeg/FFmpeg/blob/9fc8c785e2747c87121ec28f8f10ceab0562384b/doc/git-howto.texi)

# Introduction

This document aims in giving some quick references on a set of useful Git
commands. You should always use the extensive and detailed documentation
provided directly by Git:

```text
git --help
man git
```

shows you the available subcommands,

```text
git <command> --help
man git-<command>
```

shows information about the subcommand <command>.

Additional information could be found on the
[Git Reference](http://gitref.org) website.

For more information about the Git project, visit the
[Git website](http://git-scm.com/).

Consult these resources whenever you have problems, they are quite exhaustive.

What follows now is a basic introduction to Git and some FFmpeg-specific
guidelines to ease the contribution to the project.

# Basics Usage

## Get Git

You can get Git from <http://git-scm.com/>
Most distribution and operating system provide a package for it.

## Cloning the source tree

```text
git clone https://git.ffmpeg.org/ffmpeg.git <target>
```

This will put the FFmpeg sources into the directory *<target>*.

```text
git clone git@source.ffmpeg.org:ffmpeg <target>
```

This will put the FFmpeg sources into the directory *<target>* and let
you push back your changes to the remote repository.

```text
git clone git@ffmpeg.org:ffmpeg-web <target>
```

This will put the source of the FFmpeg website into the directory
*<target>* and let you push back your changes to the remote repository.

If you don't have write-access to the ffmpeg-web repository, you can
create patches after making a read-only ffmpeg-web clone:

```text
git clone git://ffmpeg.org/ffmpeg-web <target>
```

Make sure that you do not have Windows line endings in your checkouts,
otherwise you may experience spurious compilation failures. One way to
achieve this is to run

```text
git config --global core.autocrlf false
```

<a id="updating-the-source-tree-to-the-latest-revision"></a>

## Updating the source tree to the latest revision

```text
git pull (--rebase)
```

pulls in the latest changes from the tracked branch. The tracked branch
can be remote. By default the master branch tracks the branch master in
the remote origin.

> **IMPORTANT**
> `--rebase` (see below) is recommended.

## Rebasing your local branches

```text
git pull --rebase
```

fetches the changes from the main repository and replays your local commits
over it. This is required to keep all your local changes at the top of
FFmpeg's master tree. The master tree will reject pushes with merge commits.

## Adding/removing files/directories

```text
git add [-A] <filename/dirname>
git rm [-r] <filename/dirname>
```

Git needs to get notified of all changes you make to your working
directory that makes files appear or disappear.
Line moves across files are automatically tracked.

## Showing modifications

```text
git diff <filename(s)>
```

will show all local modifications in your working directory as unified diff.

## Inspecting the changelog

```text
git log <filename(s)>
```

You may also use the graphical tools like `gitview` or `gitk`
or the web interface available at <https://git.ffmpeg.org/ffmpeg.git>.

## Checking source tree status

```text
git status
```

detects all the changes you made and lists what actions will be taken in case
of a commit (additions, modifications, deletions, etc.).

## Committing

```text
git diff --check
```

to double check your changes before committing them to avoid trouble later
on. All experienced developers do this on each and every commit, no matter
how small.

Every one of them has been saved from looking like a fool by this many times.
It's very easy for stray debug output or cosmetic modifications to slip in,
please avoid problems through this extra level of scrutiny.

For cosmetics-only commits you should get (almost) empty output from

```text
git diff -w -b <filename(s)>
```

Also check the output of

```text
git status
```

to make sure you don't have untracked files or deletions.

```text
git add [-i|-p|-A] <filenames/dirnames>
```

Make sure you have told Git your name, email address and GPG key

```text
git config --global user.name "My Name"
git config --global user.email my@email.invalid
git config --global user.signingkey ABCDEF0123245
```

Enable signing all commits or use -S

```text
git config --global commit.gpgsign true
```

Use `--global` to set the global configuration for all your Git checkouts.

Git will select the changes to the files for commit. Optionally you can use
the interactive or the patch mode to select hunk by hunk what should be
added to the commit.

```text
git commit
```

Git will commit the selected changes to your current local branch.

You will be prompted for a log message in an editor, which is either
set in your personal configuration file through

```text
git config --global core.editor
```

or set by one of the following environment variables:
*GIT\_EDITOR*, *VISUAL* or *EDITOR*.

## Writing a commit message

Log messages should be concise but descriptive.

The first line must contain the context, a colon and a very short
summary of what the commit does. Details can be added, if necessary,
separated by an empty line. These details should not exceed 60-72 characters
per line, except when containing code.

Example of a good commit message:

```text
avcodec/cbs: add a helper to read extradata within packet side data

Using ff_cbs_read() on the raw buffer will not parse it as extradata,
resulting in parsing errors for example when handling ISOBMFF avcC.
This helper works around that.
```

```text
ptr might be NULL
```

If the summary on the first line is not enough, in the body of the message,
explain why you made a change, what you did will be obvious from the changes
themselves most of the time. Saying just "bug fix" or "10l" is bad. Remember
that people of varying skill levels look at and educate themselves while
reading through your code. Don't include filenames in log messages except in
the context, Git provides that information.

If the commit fixes a registered issue, state it in a separate line of the
body: `Fix Trac ticket #42.`

The first line will be used to name
the patch by `git format-patch`.

Common mistakes for the first line, as seen in `git log --oneline`
include: missing context at the beginning; description of what the code did
before the patch; line too long or wrapped to the second line.

## Preparing a patchset

```text
git format-patch <commit> [-o directory]
```

will generate a set of patches for each commit between *<commit>* and
current *HEAD*. E.g.

```text
git format-patch origin/master
```

will generate patches for all commits on current branch which are not
present in upstream.
A useful shortcut is also

```text
git format-patch -n
```

which will generate patches from last *n* commits.
By default the patches are created in the current directory.

## Sending patches for review

```text
git send-email <commit list|directory>
```

will send the patches created by `git format-patch` or directly
generates them. All the email fields can be configured in the global/local
configuration or overridden by command line.
Note that this tool must often be installed separately (e.g. *git-email*
package on Debian-based distros).

## Renaming/moving/copying files or contents of files

Git automatically tracks such changes, making those normal commits.

```text
mv/cp path/file otherpath/otherfile
git add [-A] .
git commit
```

# Git configuration

In order to simplify a few workflows, it is advisable to configure both
your personal Git installation and your local FFmpeg repository.

## Personal Git installation

Add the following to your `~/.gitconfig` to help `git send-email`
and `git format-patch` detect renames:

```text
[diff]
        renames = copy
```

## Repository configuration

In order to have `git send-email` automatically send patches
to the ffmpeg-devel mailing list, add the following stanza
to `/path/to/ffmpeg/repository/.git/config`:

```text
[sendemail]
        to = ffmpeg-devel@ffmpeg.org
```

# FFmpeg specific

## Reverting broken commits

```text
git reset <commit>
```

`git reset` will uncommit the changes till *<commit>* rewriting
the current branch history.

```text
git commit --amend
```

allows one to amend the last commit details quickly.

```text
git rebase -i origin/master
```

will replay local commits over the main repository allowing to edit, merge
or remove some of them in the process.

> **NOTE**
> `git reset`, `git commit --amend` and `git rebase`
> rewrite history, so you should use them ONLY on your local or topic branches.
> The main repository will reject those changes.

```text
git revert <commit>
```

`git revert` will generate a revert commit. This will not make the
faulty commit disappear from the history.

## Pushing changes to remote trees

```text
git push origin master --dry-run
```

Will simulate a push of the local master branch to the default remote
(*origin*). And list which branches and ranges or commits would have been
pushed.
Git will prevent you from pushing changes if the local and remote trees are
out of sync. Refer to Updating the source tree to the latest revision.

```text
git remote add <name> <url>
```

Will add additional remote with a name reference, it is useful if you want
to push your local branch for review on a remote host.

```text
git push <remote> <refspec>
```

Will push the changes to the *<remote>* repository.
Omitting *<refspec>* makes `git push` update all the remote
branches matching the local ones.

## Finding a specific svn revision

Since version 1.7.1 Git supports `:/foo` syntax for specifying commits
based on a regular expression. see man gitrevisions

```text
git show :/'as revision 23456'
```

will show the svn changeset `r23456`. With older Git versions searching in
the `git log` output is the easiest option (especially if a pager with
search capabilities is used).

This commit can be checked out with

```text
git checkout -b svn_23456 :/'as revision 23456'
```

or for Git < 1.7.1 with

```text
git checkout -b svn_23456 $SHA1
```

where *$SHA1* is the commit hash from the `git log` output.

# gpg key generation

If you have no gpg key yet, we recommend that you create a ed25519 based key as it
is small, fast and secure. Especially it results in small signatures in git.

```text
gpg --default-new-key-algo "ed25519/cert,sign+cv25519/encr" --quick-generate-key "human@server.com"
```

When generating a key, make sure the email specified matches the email used in git as some sites like
github consider mismatches a reason to declare such commits unverified. After generating a key you
can add it to the MAINTAINER file and upload it to a keyserver.

# Pre-push checklist

Once you have a set of commits that you feel are ready for pushing,
work through the following checklist to doublecheck everything is in
proper order. This list tries to be exhaustive. In case you are just
pushing a typo in a comment, some of the steps may be unnecessary.
Apply your common sense, but if in doubt, err on the side of caution.

First, make sure that the commits and branches you are going to push
match what you want pushed and that nothing is missing, extraneous or
wrong. You can see what will be pushed by running the git push command
with `--dry-run` first. And then inspecting the commits listed with
`git log -p 1234567..987654`. The `git status` command
may help in finding local changes that have been forgotten to be added.

Next let the code pass through a full run of our test suite.

- `make distclean`
- `/path/to/ffmpeg/configure`
- `make fate`
- if fate fails due to missing samples run `make fate-rsync` and retry

Make sure all your changes have been checked before pushing them, the
test suite only checks against regressions and that only to some extend. It does
obviously not check newly added features/code to be working unless you have
added a test for that (which is recommended).

Also note that every single commit should pass the test suite, not just
the result of a series of patches.

Once everything passed, push the changes to your public ffmpeg clone and post a
merge request to ffmpeg-devel. You can also push them directly but this is not
recommended.

# Server Issues

Contact the project admins at <root@ffmpeg.org> if you have technical
problems with the Git server.
