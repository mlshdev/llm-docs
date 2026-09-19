> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimanageddocument/persistentstorename

# persistentStoreName (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the name for the persistent store file inside the document’s file package.

## Declaration

```swift
class var persistentStoreName: String { get }
```

<a id="return-value"></a>

## Return Value

The name for the persistent store file inside the document’s file package.

<a id="Discussion"></a>

## Discussion

This path component is appended to the document URL provided by [UIDocument](../uidocument.md). The default name is `persistentStore`.

# persistentStoreName (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the name for the persistent store file inside the document’s file package.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSString * persistentStoreName;
```

<a id="return-value"></a>

## Return Value

The name for the persistent store file inside the document’s file package.

<a id="Discussion"></a>

## Discussion

This path component is appended to the document URL provided by [UIDocument](../uidocument.md). The default name is `persistentStore`.
