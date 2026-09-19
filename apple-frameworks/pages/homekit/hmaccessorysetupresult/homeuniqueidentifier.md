> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaccessorysetupresult/homeuniqueidentifier

# homeUniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The home that accessories were added to.

## Declaration

```swift
var homeUniqueIdentifier: UUID { get }
```

<a id="Discussion"></a>

## Discussion

See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Getting results

- [accessoryUniqueIdentifiers](accessoryuniqueidentifiers.md): The values corresponding to accessories that are set up.

# homeUniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The home that accessories were added to.

## Declaration

```objectivec
@property (copy, readonly) NSUUID * homeUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Getting results

- [accessoryUniqueIdentifiers](accessoryuniqueidentifiers.md): The values corresponding to accessories that are set up.
