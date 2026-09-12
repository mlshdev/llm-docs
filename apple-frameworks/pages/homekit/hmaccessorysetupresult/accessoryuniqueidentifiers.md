> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetupresult/accessoryuniqueidentifiers](https://developer.apple.com/documentation/homekit/hmaccessorysetupresult/accessoryuniqueidentifiers)

# accessoryUniqueIdentifiers (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The values corresponding to accessories that are set up.

## Declaration

```swift
var accessoryUniqueIdentifiers: [UUID] { get }
```

<a id="Discussion"></a>

## Discussion

Usually only one accessory is set up at a time, but adding an accessory bridge can result in multiple accessories being set up at once. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Getting results

- [homeUniqueIdentifier](homeuniqueidentifier.md): The home that accessories were added to.

# accessoryUniqueIdentifiers (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The values corresponding to accessories that are set up.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSUUID *> * accessoryUniqueIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Usually only one accessory is set up at a time, but adding an accessory bridge can result in multiple accessories being set up at once. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Getting results

- [homeUniqueIdentifier](homeuniqueidentifier.md): The home that accessories were added to.
