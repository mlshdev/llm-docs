> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconidentityconstraint/major](https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/major)

# major

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+

The constraint’s value for the major identity characteristic.

## Declaration

```swift
var major: UInt16? { get }
```

<a id="Discussion"></a>

## Discussion

The major characteristic is optional. If it’s present, a beacon’s major value needs to match the constraint’s major value to represent a match. If the constraint has no major value, it acts as a wildcard and matches any major value. You can specify the major value when initializing the constraint.

## See Also

### Getting the beacon identity

- [minor](minor.md): The constraint’s value for the minor identity characteristic.
