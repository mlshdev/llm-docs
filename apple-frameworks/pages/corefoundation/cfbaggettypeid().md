> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggettypeid()](https://developer.apple.com/documentation/corefoundation/cfbaggettypeid())

# CFBagGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFBag opaque type.

## Declaration

```swift
func CFBagGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFBag opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableBag objects have the same type identifier as CFBag objects.

# CFBagGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFBag opaque type.

## Declaration

```objectivec
extern CFTypeID CFBagGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFBag opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableBag objects have the same type identifier as CFBag objects.
