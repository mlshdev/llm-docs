> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfdictionarygettypeid()

# CFDictionaryGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFDictionary opaque type.

## Declaration

```swift
func CFDictionaryGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFDictionary opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableDictionary objects have the same type identifier as CFDictionary objects.

# CFDictionaryGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier for the CFDictionary opaque type.

## Declaration

```objectivec
extern CFTypeID CFDictionaryGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFDictionary opaque type.

<a id="Discussion"></a>

## Discussion

CFMutableDictionary objects have the same type identifier as CFDictionary objects.
