> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inshortcutavailabilityoptions/init(rawvalue:)

# init(rawValue:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the set of availability categories represented by the given value.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: An unsigned integer expressing the union of the options for the set.

<a id="Discussion"></a>

## Discussion

It’s unlikely that your code should call this directly. Instead, refer to the static members to create an [OptionSet](https://developer.apple.com/documentation/swift/optionset) of [INShortcutAvailabilityOptions](../inshortcutavailabilityoptions.md).
