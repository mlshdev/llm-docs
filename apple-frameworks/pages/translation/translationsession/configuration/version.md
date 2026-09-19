> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/configuration/version

# version

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A value the equals function uses to represent change in the configuration instance.

## Declaration

```swift
var version: Int { get }
```

<a id="discussion"></a>

## Discussion

This integer changes when you call [invalidate()](invalidate%28%29.md) on an instance of your translation session.
