> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/types](https://developer.apple.com/documentation/uikit/uipasteboard/types)

# types (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of the first item on the pasteboard.

## Declaration

```swift
var types: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of strings indicating the representation types of the first item on the pasteboard.

<a id="Discussion"></a>

## Discussion

A type is frequently, but not necessarily, a UTI (Uniform Type Identifier). It identifies a representation of the data on the pasteboard. For example, a pasteboard item could hold image data under `public.png` and `public.tiff` representations. Apps can define their own types for custom data such as `com.mycompany.myapp.mytype`; however, in this case, only those apps that know of the type could understand the data written to the pasteboard.

With this method, you can determine if the pasteboard holds data of a particular representation type by a line of code such as this:

```objc
BOOL pngOnPasteboard = [[pasteboard pasteboardTypes] containsObject:@"public.png"];
```

Starting in iOS 10, you can directly check which data types are present on a pasteboard by using the convenience methods described in Checking for data types on a pasteboard.

## See Also

### Determining types of pasteboard items

- [types(forItemSet:)](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [contains(pasteboardTypes:)](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [contains(pasteboardTypes:inItemSet:)](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSet(withPasteboardTypes:)](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.

# pasteboardTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of the first item on the pasteboard.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * pasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of strings indicating the representation types of the first item on the pasteboard.

<a id="Discussion"></a>

## Discussion

A type is frequently, but not necessarily, a UTI (Uniform Type Identifier). It identifies a representation of the data on the pasteboard. For example, a pasteboard item could hold image data under `public.png` and `public.tiff` representations. Apps can define their own types for custom data such as `com.mycompany.myapp.mytype`; however, in this case, only those apps that know of the type could understand the data written to the pasteboard.

With this method, you can determine if the pasteboard holds data of a particular representation type by a line of code such as this:

```objc
BOOL pngOnPasteboard = [[pasteboard pasteboardTypes] containsObject:@"public.png"];
```

Starting in iOS 10, you can directly check which data types are present on a pasteboard by using the convenience methods described in Checking for data types on a pasteboard.

## See Also

### Determining types of pasteboard items

- [pasteboardTypesForItemSet:](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [containsPasteboardTypes:](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [containsPasteboardTypes:inItemSet:](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSetWithPasteboardTypes:](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.
