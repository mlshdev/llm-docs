> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfarraygettypeid()

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
