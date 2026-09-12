> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetgettypeid()](https://developer.apple.com/documentation/corefoundation/cfcharactersetgettypeid())

# CFCharacterSetGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier of the CFCharacterSet opaque type.

## Declaration

```swift
func CFCharacterSetGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier of the CFCharacterSet opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableCharacterSet objects have the same type identifier as CFCharacterSet objects.

# CFCharacterSetGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier of the CFCharacterSet opaque type.

## Declaration

```objectivec
extern CFTypeID CFCharacterSetGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier of the CFCharacterSet opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableCharacterSet objects have the same type identifier as CFCharacterSet objects.
