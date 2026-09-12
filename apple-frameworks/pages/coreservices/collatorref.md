> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/collatorref](https://developer.apple.com/documentation/coreservices/collatorref)

# CollatorRef (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Refers to an opaque object that encapsulates locale and collation information for the purpose of performing Unicode string comparison.

## Declaration

```swift
typealias CollatorRef = OpaquePointer
```

<a id="discussion"></a>

## Discussion

You can obtain a `CollatorRef` value from the function  [UCCreateCollator(\_:\_:\_:\_:)](1390403-uccreatecollator.md).

# CollatorRef (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Refers to an opaque object that encapsulates locale and collation information for the purpose of performing Unicode string comparison.

## Declaration

```objectivec
typedef struct OpaqueCollatorRef *CollatorRef;
```

<a id="discussion"></a>

## Discussion

You can obtain a `CollatorRef` value from the function  [UCCreateCollator](1390403-uccreatecollator.md).
