> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconidentityconstraint/minor](https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/minor)

# minor

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+

The constraint’s value for the minor identity characteristic.

## Declaration

```swift
var minor: UInt16? { get }
```

<a id="Discussion"></a>

## Discussion

The minor characteristic is optional. If it’s present, a beacon’s minor value needs to match the constraint’s minor value to represent a match. If the constraint has no minor value, it acts as a wildcard and matches any minor value.

## See Also

### Getting the beacon identity

- [major](major.md): The constraint’s value for the major identity characteristic.
