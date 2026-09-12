> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraygettypeid()](https://developer.apple.com/documentation/corefoundation/cfarraygettypeid())

# CFArrayGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFArray opaque type.

## Declaration

```swift
func CFArrayGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFArray opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableArray objects have the same type identifier as CFArray objects.

# CFArrayGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFArray opaque type.

## Declaration

```objectivec
extern CFTypeID CFArrayGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFArray opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableArray objects have the same type identifier as CFArray objects.
