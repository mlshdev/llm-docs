> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgettypeid()](https://developer.apple.com/documentation/corefoundation/cfstringgettypeid())

# CFStringGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFString opaque type.

## Declaration

```swift
func CFStringGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFString opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableString objects have the same type identifier as CFString objects.

## See Also

### Getting String Properties

- [CFShowStr(\_:)](cfshowstr%28__%29.md): Prints the attributes of a string during debugging.

# CFStringGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFString opaque type.

## Declaration

```objectivec
extern CFTypeID CFStringGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFString opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableString objects have the same type identifier as CFString objects.

## See Also

### Getting String Properties

- [CFShowStr](cfshowstr%28__%29.md): Prints the attributes of a string during debugging.
