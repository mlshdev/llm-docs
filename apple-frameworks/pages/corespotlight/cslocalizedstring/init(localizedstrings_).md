> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/cslocalizedstring/init(localizedstrings:)

# init(localizedStrings:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Initializes a `CSLocalizedString` object with the specified dictionary of localized strings.

## Declaration

```swift
init(localizedStrings: [AnyHashable : Any])
```

## Parameters

- `localizedStrings`: A dictionary in which each key-value pair consists of a language designator and a localized string. For example, you might pass in a dictionary like `@{@"en":@"Email Message"}`.

<a id="return-value"></a>

## Return Value

An object that contains the localized versions for a specific string.

# initWithLocalizedStrings: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Initializes a `CSLocalizedString` object with the specified dictionary of localized strings.

## Declaration

```objectivec
- (instancetype) initWithLocalizedStrings:(NSDictionary *) localizedStrings;
```

## Parameters

- `localizedStrings`: A dictionary in which each key-value pair consists of a language designator and a localized string. For example, you might pass in a dictionary like `@{@"en":@"Email Message"}`.

<a id="return-value"></a>

## Return Value

An object that contains the localized versions for a specific string.
