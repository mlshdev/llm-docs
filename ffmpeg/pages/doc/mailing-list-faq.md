> Commit-pinned source for FFmpeg master: [doc/mailing-list-faq.texi](https://github.com/FFmpeg/FFmpeg/blob/0a59c39dad3da0e530836a7e7d1901134a0b592e/doc/mailing-list-faq.texi)

# General Questions

## What is a mailing list?

A mailing list is not much different than emailing someone, but the
main difference is that your message is received by everyone who
subscribes to the list. It is somewhat like a forum but in email form.

See the [ffmpeg-user archives](https://lists.ffmpeg.org/pipermail/ffmpeg-user/)
for examples.

## What type of questions can I ask?

-

[ffmpeg-user](https://lists.ffmpeg.org/mailman/listinfo/ffmpeg-user/):
For questions involving unscripted usage or compilation of the FFmpeg
command-line tools (`ffmpeg`, `ffprobe`, `ffplay`).

-

[libav-user](https://lists.ffmpeg.org/mailman/listinfo/libav-user/):
For questions involving the FFmpeg libav\* libraries (libavcodec,
libavformat, libavfilter, etc).

-

[ffmpeg-devel](https://lists.ffmpeg.org/mailman/listinfo/ffmpeg-devel/):
For discussions involving the development of FFmpeg and for submitting
patches. User questions should be asked at ffmpeg-user or libav-user.

To report a bug see <https://ffmpeg.org/bugreports.html>.

We cannot provide help for scripts and/or third-party tools.

<a id="how-do-i-ask-a-question-or-send-a-message-to-a-mailing-list"></a>

## How do I ask a question or send a message to a mailing list?

First you must How do I subscribe?. Then all you have to do is
send an email:

-

Email <ffmpeg-user@ffmpeg.org> to send a message to the
ffmpeg-user mailing list.

-

Email <libav-user@ffmpeg.org> to send a message to the
libav-user mailing list.

-

Email <ffmpeg-devel@ffmpeg.org> to send a message to the
ffmpeg-devel mailing list.

# Subscribing / Unsubscribing

<a id="how-do-i-subscribe"></a>

## How do I subscribe?

Email <ffmpeg-user-request@ffmpeg.org> with the subject
*subscribe*.

Or visit the [ffmpeg-user mailing list info page](https://lists.ffmpeg.org/mailman/listinfo/ffmpeg-user/)
and refer to the *Subscribing to ffmpeg-user* section.

The process is the same for the other mailing lists.

## How do I unsubscribe?

Email <ffmpeg-user-request@ffmpeg.org> with subject *unsubscribe*.

Or visit the [ffmpeg-user mailing list info page](https://lists.ffmpeg.org/mailman/listinfo/ffmpeg-user/),
scroll to bottom of page, enter your email address in the box, and click
the *Unsubscribe or edit options* button.

The process is the same for the other mailing lists.

Please avoid asking a mailing list admin to unsubscribe you unless you
are absolutely unable to do so by yourself. See Who do I contact if I have a problem with the mailing list?

Note that it is possible to temporarily halt message delivery (vacation mode).
See How do I disable mail delivery without unsubscribing?

# Moderation Queue

<a id="why-is-my-message-awaiting-moderator-approval"></a>

## Why is my message awaiting moderator approval?

Some messages are automatically held in the *moderation queue* and
must be manually approved by a mailing list admin:

These are:

-

Messages that exceed the What is the message size limit?.

-

Messages from users whose accounts have been set with the *moderation flag*
(very rarely occurs, but may if a user repeatedly ignores the rules
or is abusive towards others).

## How long does it take for my message in the moderation queue to be approved?

The queue is not checked on a regular basis. You can ask on the
`#ffmpeg-devel` IRC channel on Libera Chat for someone to approve your message.

<a id="how-do-i-delete-my-message-in-the-moderation-queue"></a>

## How do I delete my message in the moderation queue?

You should have received an email with the subject *Your message to <mailing list name> awaits moderator approval*.
A link is in the message that will allow you to delete your message
unless a mailing list admin already approved or rejected it.

# Archives

<a id="where-are-the-archives"></a>

## Where are the archives?

See the *Archives* section on the [FFmpeg Contact](https://ffmpeg.org/contact.html)
page for links to all FFmpeg mailing list archives.

Note that the archives are split by month. Discussions that span
several months will be split into separate months in the archives.

## How do I reply to a message in the archives?

Click the email link at the top of the message just under the subject
title. The link will provide the proper headers to keep the message
within the thread.

Note that you must be subscribed to send a message to the ffmpeg-user or
libav-user mailing lists.

## How do I search the archives?

Perform a site search using your favorite search engine. Example:

`site:lists.ffmpeg.org/pipermail/ffmpeg-user/ "search term"`

# Other

## Is there an alternative to the mailing list?

You can ask for help in the official `#ffmpeg` IRC channel on Libera Chat.

There are also numerous third-party help sites such as
[Super User](https://superuser.com/tags/ffmpeg) and
[r/ffmpeg on reddit](https://www.reddit.com/r/ffmpeg/).

<a id="what-is-top-posting"></a>

## What is top-posting?

See <https://en.wikipedia.org/wiki/Posting_style#Top-posting>.

Instead, use trimmed interleaved/inline replies ([example](https://lists.ffmpeg.org/pipermail/ffmpeg-user/2017-April/035849.html)).

<a id="what-is-the-message-size-limit"></a>

## What is the message size limit?

The message size limit is 1000 kilobytes. Please provide links to larger files
instead of attaching them.

## Where can I upload sample files?

Anywhere that is not too annoying for us to use.

Google Drive and Dropbox are acceptable if you need a file host, and
[0x0.st](https://0x0.st/) is good for files under 256 MiB.

Small, short samples are preferred if possible.

## Will I receive spam if I send and/or subscribe to a mailing list?

Highly unlikely.

-

The list of subscribed users is not public.

-

Email addresses in the archives are obfuscated.

-

Several unique test email accounts were utilized and none have yet
received any spam.

However, you may see a spam in the mailing lists on rare occasions:

-

Spam in the moderation queue may be accidentally approved due to human
error.

-

There have been a few messages from subscribed users who had their own
email addresses hacked and spam messages from (or appearing to be from)
the hacked account were sent to their contacts (a mailing list being a
contact in these cases).

-

If you are subscribed to the bug tracker mailing list (ffmpeg-trac) you
may see the occasional spam as a false bug report, but we take measures
to try to prevent this.

## How do I filter mailing list messages?

Use the *List-Id*. For example, the ffmpeg-user mailing list is
`ffmpeg-user.ffmpeg.org`. You can view the List-Id in the raw message
or headers.

You can then filter the mailing list messages to their own folder.

<a id="how-do-i-disable-mail-delivery-without-unsubscribing"></a>

## How do I disable mail delivery without unsubscribing?

Sometimes you may want to temporarily stop receiving all mailing list
messages. This "vacation mode" is simple to do:

-

Go to the [ffmpeg-user mailing list info page](https://lists.ffmpeg.org/mailman/listinfo/ffmpeg-user/)

-

Enter your email address in the box at very bottom of the page and click the
*Unsubscribe or edit options* box.

-

Enter your password and click the *Log in* button.

-

Look for the *Mail delivery* option. Here you can disable/enable mail
delivery. If you check *Set globally* it will apply your choice to all
other FFmpeg mailing lists you are subscribed to.

Alternatively, from your subscribed address, send a message to <ffmpeg-user-request@ffmpeg.org>
with the subject *set delivery off*. To re-enable mail delivery send a
message to <ffmpeg-user-request@ffmpeg.org> with the subject
*set delivery on*.

<a id="why-is-the-mailing-list-munging-my-address"></a>

## Why is the mailing list munging my address?

This is due to subscribers that use an email service with a DMARC reject policy
which adds difficulties to mailing list operators.

The mailing list must re-write (munge) the *From:* header for such users;
otherwise their email service will reject and bounce the message resulting in
automatic unsubscribing from the mailing list.

When sending a message these users will see *via <mailing list name>*
added to their name and the *From:* address munged to the address of
the particular mailing list.

If you want to avoid this then please use a different email service.

Note that ffmpeg-devel does not apply any munging as it causes issues with
patch authorship. As a result users with an email service with a DMARC reject
policy may be automatically unsubscribed due to rejected and bounced messages.

# Rules and Etiquette

## What are the rules and the proper etiquette?

There may seem to be many things to remember, but we want to help and
following these guidelines will allow you to get answers more quickly
and help avoid getting ignored.

-

Always show your actual, unscripted `ffmpeg` command and the
complete, uncut console output from your command.

-

Use the most simple and minimal command that still shows the issue you
are encountering.

-

Provide all necessary information so others can attempt to duplicate
your issue. This includes the actual command, complete uncut console
output, and any inputs that are required to duplicate the issue.

-

Use the latest `ffmpeg` build you can get. See the [FFmpeg Download](https://ffmpeg.org/download.html)
page for links to recent builds for Linux, macOS, and Windows. Or
compile from the current git master branch.

-

Avoid [top-posting](https://en.wikipedia.org/wiki/Posting_style#Top-posting).
Also see What is top-posting?

-

Avoid hijacking threads. Thread hijacking is replying to a message and
changing the subject line to something unrelated to the original thread.
Most email clients will still show the renamed message under the
original thread. This can be confusing and these types of messages are
often ignored.

-

Do not send screenshots. Copy and paste console text instead of making
screenshots of the text.

-

Avoid sending email disclaimers and legalese if possible as this is a
public list.

-

Avoid using the `-loglevel debug`, `-loglevel quiet`, and
`-hide_banner` options unless requested to do so.

-

If you attach files avoid compressing small files. Uncompressed is
preferred.

-

Please do not send HTML-only messages. The mailing list will ignore the
HTML component of your message. Most mail clients will automatically
include a text component: this is what the mailing list will use.

-

Configuring your mail client to break lines after 70 or so characters is
recommended.

-

Avoid sending the same message to multiple mailing lists.

-

Please follow our [Code of Conduct](https://ffmpeg.org/community.html#Code-of-Conduct).

# Help

## Why am I not receiving any messages?

Some email providers have blacklists or spam filters that block or mark
the mailing list messages as false positives. Unfortunately, the user is
often not aware of this and is often out of their control.

When possible we attempt to notify the provider to be removed from the
blacklists or filters.

## Why are my sent messages not showing up?

Excluding Why is my message awaiting moderator approval?
there are a few other reasons why your messages may fail to appear:

-

HTML-only messages are ignored by the mailing lists. Most mail clients
automatically include a text component alongside HTML email: this is what
the mailing list will use. If it does not then consider your client to be
broken, because sending a text component along with the HTML component to
form a multi-part message is recommended by email standards.

-

Check your spam folder.

<a id="why-do-i-keep-getting-unsubscribed-from-ffmpeg-devel"></a>

## Why do I keep getting unsubscribed from ffmpeg-devel?

Users with an email service that has a DMARC reject or quarantine policy may be
automatically unsubscribed from the ffmpeg-devel mailing list due to the mailing
list messages being continuously rejected and bounced back.

Consider using a different email service.

<a id="who-do-i-contact-if-i-have-a-problem-with-the-mailing-list"></a>

## Who do I contact if I have a problem with the mailing list?

Send a message to <ffmpeg-user-owner@ffmpeg.org>.
