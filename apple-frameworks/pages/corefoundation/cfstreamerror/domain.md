> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamerror/domain](https://developer.apple.com/documentation/corefoundation/cfstreamerror/domain)

# domain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The error domain that should be used to interpret the error. See [CFStreamErrorDomain](../cfstreamerrordomain.md) for possible values.

> Use [CFReadStreamCopyError(\_:)](../cfreadstreamcopyerror%28__%29.md) and [CFWriteStreamCopyError(\_:)](../cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```swift
var domain: CFIndex
```

# domain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The error domain that should be used to interpret the error. See [CFStreamErrorDomain](../cfstreamerrordomain.md) for possible values.

> Use [CFReadStreamCopyError](../cfreadstreamcopyerror%28__%29.md) and [CFWriteStreamCopyError](../cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```objectivec
CFIndex domain;
```
