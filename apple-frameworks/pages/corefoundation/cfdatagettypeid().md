> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatagettypeid()](https://developer.apple.com/documentation/corefoundation/cfdatagettypeid())

# CFDataGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFData opaque type.

## Declaration

```swift
func CFDataGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFData opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableData objects have the same type identifier as CFData objects.

# CFDataGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFData opaque type.

## Declaration

```objectivec
extern CFTypeID CFDataGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFData opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableData objects have the same type identifier as CFData objects.
