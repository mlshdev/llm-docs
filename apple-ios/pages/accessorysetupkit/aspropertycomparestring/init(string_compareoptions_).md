> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorysetupkit/aspropertycomparestring/init(string:compareoptions:)

# init(string:compareOptions:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a property compare string instance with the given string and comparison options.

## Declaration

```swift
init(string: String, compareOptions: NSString.CompareOptions = [])
```

## Parameters

- `string`: The string to compare against.
- `compareOptions`: Options to apply when comparing strings.

# initWithString:compareOptions: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a property compare string instance with the given string and comparison options.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string compareOptions:(NSStringCompareOptions) compareOptions;
```

## Parameters

- `string`: The string to compare against.
- `compareOptions`: Options to apply when comparing strings.
