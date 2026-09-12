> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy/sensitive(mask:)](https://developer.apple.com/documentation/os/oslogprivacy/sensitive(mask:))

# sensitive(mask:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a privacy structure that marks an interpolated value as sensitive, and customizes the display of redacted values.

## Declaration

```swift
static func sensitive(mask: OSLogPrivacy.Mask) -> OSLogPrivacy
```

## Parameters

- `mask`: A mask that determines whether the system replaces a redacted value with a generic string or a string from a hash of the redacted value.

<a id="return-value"></a>

## Return Value

A privacy object that redacts a sensitive value.

## See Also

### Creating a Custom Privacy Mask

- [auto(mask:)](auto%28mask_%29.md): Returns a privacy structure that determines whether to redact or show values according to their type, and customizes the display of redacted values.
- [private(mask:)](private%28mask_%29.md): Returns a privacy structure that marks an interpolated value as private, and customizes the display of redacted values.
- [OSLogPrivacy.Mask](mask.md): A mask that establishes how the system displays a redacted value in a log message.
