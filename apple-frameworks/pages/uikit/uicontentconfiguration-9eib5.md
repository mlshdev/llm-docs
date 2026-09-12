> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentconfiguration-9eib5](https://developer.apple.com/documentation/uikit/uicontentconfiguration-9eib5)

# UIContentConfiguration

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The requirements for an object that provides the configuration for a content view.

## Declaration

```swift
protocol UIContentConfiguration
```

<a id="overview"></a>

## Overview

This protocol provides a blueprint for a content-configuration object, which encompasses default styling and content for a content view. The content configuration encapsulates all of the supported properties and behaviors for content view customization. You use the configuration to create the content view.

## Topics

### Creating a content configuration

- [makeContentView()](uicontentconfiguration-9eib5/makecontentview%28%29.md): Creates a new instance of the content view using this configuration.

### Updating a content configuration

- [updated(for:)](uicontentconfiguration-9eib5/updated%28for_%29.md): Generates a configuration for the specified state by applying the configuration’s default values for that state to any properties that you haven’t customized.

## Relationships

### Conforming Types

- [UIContentUnavailableConfiguration](uicontentunavailableconfiguration-swift.struct.md)
- [UIListContentConfiguration](uilistcontentconfiguration-swift.struct.md)

## See Also

### Content configurations

- [UIListContentConfiguration](uilistcontentconfiguration-swift.struct.md): A content configuration for a list-based content view.
- [UIListContentView](uilistcontentview.md): A content view for displaying list-based content.
- [UIContentView](uicontentview-5fh3z.md): The requirements for a content view that you create using a configuration.
