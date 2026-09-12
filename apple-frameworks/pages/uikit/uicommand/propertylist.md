> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommand/propertylist](https://developer.apple.com/documentation/uikit/uicommand/propertylist)

# propertyList (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains data to associate with the command.

## Declaration

```swift
var propertyList: Any? { get }
```

<a id="Discussion"></a>

## Discussion

Use [propertyList](propertylist.md) to associate a small amount of data to the command.

**Swift**

In Swift, the property list should contain only standard library types such as [Array](https://developer.apple.com/documentation/swift/array), [Dictionary](https://developer.apple.com/documentation/swift/dictionary), [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), and [Double](https://developer.apple.com/documentation/swift/double), and Foundation types such as [Date](../../foundation/date.md) and [Data](../../foundation/data.md).

**Objective-C**

In Objective-C, the property list should contain only [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), [NSDate](../../foundation/nsdate.md), and [NSData](../../foundation/nsdata.md) objects.

## See Also

### Associating data

- [UICommandTagShare](../uicommandtagshare.md): A value that identifies a command as a Share menu.

# propertyList (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that contains data to associate with the command.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id propertyList;
```

<a id="Discussion"></a>

## Discussion

Use [propertyList](propertylist.md) to associate a small amount of data to the command.

**Swift**

In Swift, the property list should contain only standard library types such as [Array](https://developer.apple.com/documentation/swift/array), [Dictionary](https://developer.apple.com/documentation/swift/dictionary), [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), and [Double](https://developer.apple.com/documentation/swift/double), and Foundation types such as [Date](../../foundation/date.md) and [Data](../../foundation/data.md).

**Objective-C**

In Objective-C, the property list should contain only [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), [NSDate](../../foundation/nsdate.md), and [NSData](../../foundation/nsdata.md) objects.

## See Also

### Associating data

- [UICommandTagShare](../uicommandtagshare.md): A value that identifies a command as a Share menu.
