> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogprivacy](https://developer.apple.com/documentation/os/oslogprivacy)

# OSLogPrivacy

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The privacy options that determine when to redact or display values in log messages.

## Declaration

```swift
@frozen struct OSLogPrivacy
```

<a id="overview"></a>

## Overview

The [OSLogPrivacy](oslogprivacy.md) structure determines the visibility of interpolated values in log messages. Because people have access to log messages that your app generates, use the privacy options to hide potentially sensitive information. For example, you might use it to hide account information or personal data.

Use the available properties and methods to fetch an appropriately configured version of this structure, and pass it with your interpolated value in the log message. The following example shows how to mark a variable that contains the user’s bank account information as private:

```swift
Logger().info("User bank account number: \(accountNumber, privacy: .private)")
```

When you want to replace the generic redaction string with a hashed version of the original value, specify privacy options using the [auto(mask:)](oslogprivacy/auto%28mask_%29.md), [private(mask:)](oslogprivacy/private%28mask_%29.md), and [sensitive(mask:)](oslogprivacy/sensitive%28mask_%29.md) methods. Using a hash string makes it possible to correlate log messages that contain the same original value, which helps you protect the user’s privacy and still diagnose issues surrounding a specific value.

## Topics

### Getting the Privacy Options

- [auto](oslogprivacy/auto.md): The standard option to let the system determine whether to redact or display a value.
- [private](oslogprivacy/private.md): The standard option to always redact the interpolated value.
- [public](oslogprivacy/public.md): The standard option to always show the interpolated value.
- [sensitive](oslogprivacy/sensitive.md): The option to always redact interpolated values that contain sensitive information.

### Creating a Custom Privacy Mask

- [auto(mask:)](oslogprivacy/auto%28mask_%29.md): Returns a privacy structure that determines whether to redact or show values according to their type, and customizes the display of redacted values.
- [private(mask:)](oslogprivacy/private%28mask_%29.md): Returns a privacy structure that marks an interpolated value as private, and customizes the display of redacted values.
- [sensitive(mask:)](oslogprivacy/sensitive%28mask_%29.md): Returns a privacy structure that marks an interpolated value as sensitive, and customizes the display of redacted values.
- [OSLogPrivacy.Mask](oslogprivacy/mask.md): A mask that establishes how the system displays a redacted value in a log message.
