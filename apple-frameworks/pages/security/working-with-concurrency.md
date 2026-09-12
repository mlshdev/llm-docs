> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/working-with-concurrency](https://developer.apple.com/documentation/security/working-with-concurrency)

# Working with Concurrency

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** Article

Learn about thread safety issues related to the certificate, key, and trust services API.

<a id="overview"></a>

## Overview

In macOS, some of the functions of this API block while waiting for input from the user (for example, when the user is asked to unlock a keychain or give permission to change trust settings). In general, it is safe to use this API in threads other than your main thread, but avoid calling the functions from multiple operations, work queues, or threads concurrently. Instead, serialize function calls or confine them to a single thread.

In iOS, all the functions in this API are thread-safe and reentrant.
