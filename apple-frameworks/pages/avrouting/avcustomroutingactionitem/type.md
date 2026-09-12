> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingactionitem/type](https://developer.apple.com/documentation/avrouting/avcustomroutingactionitem/type)

# type (Swift)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A type with an identifier that matches a value in the app’s configuration.

## Declaration

```swift
@NSCopying var type: UTType { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a `UTType` symbol name and description in your app’s `Info.plist` file.

## See Also

### Configuring an item

- [overrideTitle](overridetitle.md): A string to use to override the title of the item’s type.

# type (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A type with an identifier that matches a value in the app’s configuration.

## Declaration

```objectivec
@property (nonatomic, copy) UTType * type;
```

<a id="Discussion"></a>

## Discussion

Provide a `UTType` symbol name and description in your app’s `Info.plist` file.

## See Also

### Configuring an item

- [overrideTitle](overridetitle.md): A string to use to override the title of the item’s type.
