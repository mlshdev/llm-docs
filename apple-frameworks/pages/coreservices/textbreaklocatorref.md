> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/textbreaklocatorref](https://developer.apple.com/documentation/coreservices/textbreaklocatorref)

# TextBreakLocatorRef (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Refers to an opaque object that encapsulates locale and text-break information for the purpose of finding boundaries in Unicode text.

## Declaration

```swift
typealias TextBreakLocatorRef = OpaquePointer
```

<a id="discussion"></a>

## Discussion

You can obtain a `TextBreakLocatorRef` value from the function  [UCCreateTextBreakLocator](1390362-uccreatetextbreaklocator.md).

# TextBreakLocatorRef (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Refers to an opaque object that encapsulates locale and text-break information for the purpose of finding boundaries in Unicode text.

## Declaration

```objectivec
typedef struct OpaqueTextBreakLocatorRef *TextBreakLocatorRef;
```

<a id="discussion"></a>

## Discussion

You can obtain a `TextBreakLocatorRef` value from the function  [UCCreateTextBreakLocator](1390362-uccreatetextbreaklocator.md).
