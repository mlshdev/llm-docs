> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social](https://developer.apple.com/documentation/social)

# Social (Swift)

**Framework:** Social  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Post content to supported social networking services, using standard system interfaces.

<a id="overview"></a>

## Overview

On iOS and macOS, this framework provides a template for creating HTTP requests. On iOS only, the Social framework provides a generalized interface for posting requests on behalf of the user.

A common way to use this framework is:

- Create a network session.
- Get the activity feed for a user.
- Make a new post.
- Set properties on a post, add attachments, etc.
- Publish a post to an activity feed.

## Topics

### Composition Interfaces

- [SLComposeServiceViewController](social/slcomposeserviceviewcontroller.md): A view controller that you present from your share app extension, allowing the user to compose social media posts.
- [SLComposeViewController](social/slcomposeviewcontroller.md): A view controller that allows the user to compose social media posts.

### Server Communication

- [SLRequest](social/slrequest.md): An object that you use to assemble an HTTP request for communicating with a social media service.

# Social (Objective-C)

**Framework:** Social  
**Kind:** Framework  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Post content to supported social networking services, using standard system interfaces.

<a id="overview"></a>

## Overview

On iOS and macOS, this framework provides a template for creating HTTP requests. On iOS only, the Social framework provides a generalized interface for posting requests on behalf of the user.

A common way to use this framework is:

- Create a network session.
- Get the activity feed for a user.
- Make a new post.
- Set properties on a post, add attachments, etc.
- Publish a post to an activity feed.

## Topics

### Composition Interfaces

- [SLComposeServiceViewController](social/slcomposeserviceviewcontroller.md): A view controller that you present from your share app extension, allowing the user to compose social media posts.
- [SLComposeViewController](social/slcomposeviewcontroller.md): A view controller that allows the user to compose social media posts.

### Server Communication

- [SLRequest](social/slrequest.md): An object that you use to assemble an HTTP request for communicating with a social media service.

### Macros

- [SOCIAL_CLASS_AVAILABLE](social/social_class_available.md)
- [SOCIAL_CLASS_AVAILABLE_IOS](social/social_class_available_ios.md)
- [SOCIAL_CLASS_AVAILABLE_MAC](social/social_class_available_mac.md)
- [SOCIAL_EXTERN](social/social_extern.md)
