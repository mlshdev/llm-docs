> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phadjustmentdata/formatidentifier](https://developer.apple.com/documentation/photos/phadjustmentdata/formatidentifier)

# formatIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

A string uniquely identifying the format of the adjustment data.

## Declaration

```swift
var formatIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Set this identifier when you create an adjustment object with the [init(formatIdentifier:formatVersion:data:)](init%28formatidentifier_formatversion_data_%29.md) method. For best results, identify your organization or product using a reverse-DNS-style name, such as `com.example.myApp`.

Read this property, and the [formatVersion](formatversion.md) property, to determine whether the adjustment data saved with an asset was created by your app or is otherwise compatible with your app.

## See Also

### Identifying the Format of an Adjustment’s Data

- [formatVersion](formatversion.md): A version number for the adjustment data format.

# formatIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

A string uniquely identifying the format of the adjustment data.

## Declaration

```objectivec
@property (copy, readonly) NSString * formatIdentifier;
```

<a id="Discussion"></a>

## Discussion

Set this identifier when you create an adjustment object with the [initWithFormatIdentifier:formatVersion:data:](init%28formatidentifier_formatversion_data_%29.md) method. For best results, identify your organization or product using a reverse-DNS-style name, such as `com.example.myApp`.

Read this property, and the [formatVersion](formatversion.md) property, to determine whether the adjustment data saved with an asset was created by your app or is otherwise compatible with your app.

## See Also

### Identifying the Format of an Adjustment’s Data

- [formatVersion](formatversion.md): A version number for the adjustment data format.
