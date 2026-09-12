> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/applinks/defaults-swift.dictionary](https://developer.apple.com/documentation/bundleresources/applinks/defaults-swift.dictionary)

# applinks.Defaults (Swift)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that defines the default settings to use for universal links pattern matching.

## Declaration

```swift
object applinks.Defaults
```

## Properties

- `caseSensitive` — `boolean`:
- `percentEncoded` — `boolean`:

<a id="overview"></a>

## Overview

This object is a subclass of `components` and can contain any of its properties. See [applinks.Details.Components](details-swift.dictionary/components-swift.dictionary.md) for a list of available properties.

You can specify pattern-matching values at three levels: domain, app, and URL. You use the `defaults` object to define domain- and app-level default values. When you define default values at the domain level, they apply to all pattern matches for the domain, while default values at the app level apply to all pattern matches for the associated apps.

The more specific definition overrides the less specific. So the default values you set at the app level override the default values you set at the domain level. If you set values at the URL level in the [applinks.Details.Components](details-swift.dictionary/components-swift.dictionary.md) object, those values override the default values at the app and domain levels.

# applinks.Defaults (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Object  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that defines the default settings to use for universal links pattern matching.

## Declaration

```objectivec
object applinks.Defaults
```

## Properties

- `caseSensitive` — `boolean`:
- `percentEncoded` — `boolean`:

<a id="overview"></a>

## Overview

This object is a subclass of `components` and can contain any of its properties. See [applinks.Details.Components](details-swift.dictionary/components-swift.dictionary.md) for a list of available properties.

You can specify pattern-matching values at three levels: domain, app, and URL. You use the `defaults` object to define domain- and app-level default values. When you define default values at the domain level, they apply to all pattern matches for the domain, while default values at the app level apply to all pattern matches for the associated apps.

The more specific definition overrides the less specific. So the default values you set at the app level override the default values you set at the domain level. If you set values at the URL level in the [applinks.Details.Components](details-swift.dictionary/components-swift.dictionary.md) object, those values override the default values at the app and domain levels.
