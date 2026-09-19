> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfbitvectorgettypeid()

# CFBitVectorGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFBitVector opaque type.

## Declaration

```swift
func CFBitVectorGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFBitVector opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableBitVector objects have the same type identifier as CFBitVector objects.

# CFBitVectorGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFBitVector opaque type.

## Declaration

```objectivec
extern CFTypeID CFBitVectorGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFBitVector opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableBitVector objects have the same type identifier as CFBitVector objects.
