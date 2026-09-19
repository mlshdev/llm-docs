> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dimension/init(symbol:converter:)

# init(symbol:converter:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a dimensional unit with the symbol and unit converter you specify.

## Declaration

```swift
init(symbol: String, converter: UnitConverter)
```

## Parameters

- `symbol`: The symbol used to represent the unit.
- `converter`: The unit converter used to represent the unit in terms of the dimension’s base unit.

<a id="return-value"></a>

## Return Value

A new dimensional unit with the specified symbol and unit converter.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

# initWithSymbol:converter: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a dimensional unit with the symbol and unit converter you specify.

## Declaration

```objectivec
- (instancetype) initWithSymbol:(NSString *) symbol converter:(NSUnitConverter *) converter;
```

## Parameters

- `symbol`: The symbol used to represent the unit.
- `converter`: The unit converter used to represent the unit in terms of the dimension’s base unit.

<a id="return-value"></a>

## Return Value

A new dimensional unit with the specified symbol and unit converter.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.
