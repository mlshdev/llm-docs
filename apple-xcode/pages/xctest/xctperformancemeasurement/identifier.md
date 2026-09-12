> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurement/identifier](https://developer.apple.com/documentation/xctest/xctperformancemeasurement/identifier)

# identifier (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A unique identifier for a measurement.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Make an identifier for a measurement unique to the property being measured; it doesn’t need to be unique for each instance of a measurement. As an example, a measurement of database access performance might have the identifier `com.example.ourdb_transactionthroughput`.

## See Also

### Identifying Measurements

- [displayName](displayname.md): A human-readable name for a measurement.

# identifier (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A unique identifier for a measurement.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Make an identifier for a measurement unique to the property being measured; it doesn’t need to be unique for each instance of a measurement. As an example, a measurement of database access performance might have the identifier `com.example.ourdb_transactionthroughput`.

## See Also

### Identifying Measurements

- [displayName](displayname.md): A human-readable name for a measurement.
