> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442676-fseventstreamcopydescription](https://developer.apple.com/documentation/coreservices/1442676-fseventstreamcopydescription)

# FSEventStreamCopyDescription(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamCopyDescription(_ streamRef: ConstFSEventStreamRef) -> CFString
```

<a id="return_value"></a>

## Return Value

A CFStringRef containing the description of the supplied stream. Ownership follows the Copy rule.

<a id="discussion"></a>

## Discussion

Returns a CFStringRef containing the description of the supplied stream. For debugging only.

# FSEventStreamCopyDescription (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CFStringRef FSEventStreamCopyDescription(ConstFSEventStreamRef streamRef);
```

<a id="return_value"></a>

## Return Value

A CFStringRef containing the description of the supplied stream. Ownership follows the Copy rule.

<a id="discussion"></a>

## Discussion

Returns a CFStringRef containing the description of the supplied stream. For debugging only.
