> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassproperties/init(for:)](https://developer.apple.com/documentation/passkit/pkstoredvaluepassproperties/init(for:))

# init(for:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

Creates a stored-value pass properties object for the specified pass.

## Declaration

```swift
convenience init?(for pass: PKPass)
```

## Parameters

- `pass`: A pass that contains a value used for transactions.

# passPropertiesForPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

Creates a stored-value pass properties object for the specified pass.

## Declaration

```objectivec
+ (instancetype) passPropertiesForPass:(PKPass *) pass;
```

## Parameters

- `pass`: A pass that contains a value used for transactions.
