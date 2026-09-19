> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsoperation-init

# init

**Interface languages:** Swift, Objective-C

**Framework:** Foundation  
**Kind:** Article

Returns an initialized `NSOperation` object.

<a id="overview"></a>

## Overview

Your custom subclasses must call this method. The default implementation initializes the object’s instance variables and prepares it for use. This method runs on the current thread—that is, the thread you use to allocate the operation object.

## See Also

### Related Documentation

- [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091)
