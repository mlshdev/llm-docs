> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/processinfo](https://developer.apple.com/documentation/foundation/processinfo/processinfo)

# processInfo (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the process information agent for the process.

## Declaration

```swift
class var processInfo: ProcessInfo { get }
```

<a id="return-value"></a>

## Return Value

Shared process information agent for the process.

<a id="Discussion"></a>

## Discussion

An [ProcessInfo](../processinfo.md) object is created the first time this method is invoked, and that same object is returned on each subsequent invocation.

# processInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the process information agent for the process.

## Declaration

```objectivec
@property (class, strong, readonly) NSProcessInfo * processInfo;
```

<a id="return-value"></a>

## Return Value

Shared process information agent for the process.

<a id="Discussion"></a>

## Discussion

An [NSProcessInfo](../processinfo.md) object is created the first time this method is invoked, and that same object is returned on each subsequent invocation.
