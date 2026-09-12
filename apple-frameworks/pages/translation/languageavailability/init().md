> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/languageavailability/init()](https://developer.apple.com/documentation/translation/languageavailability/init())

# init()

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Creates an instance to check what languages are available.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

This initializer uses the default translation strategy based on the SDK version your app was built with. Apps built with iOS 26.4 or macOS 26.4 SDKs and later default to checking for Apple Intelligence models when available. Apps built with earlier SDKs default to traditional models.

To explicitly specify which translation models to check for, use [init(preferredStrategy:)](init%28preferredstrategy_%29.md).

## See Also

### Creating a language availability

- [init(preferredStrategy:)](init%28preferredstrategy_%29.md): Creates an instance for checking language availability with a preferred translation strategy.
