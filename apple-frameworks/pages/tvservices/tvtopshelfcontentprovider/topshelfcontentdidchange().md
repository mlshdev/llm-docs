> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvservices/tvtopshelfcontentprovider/topshelfcontentdidchange()

# topShelfContentDidChange() (Swift)

**Framework:** TV Services  
**Kind:** Type Method  
**Availability:** tvOS 13.0+

Tells the system that your top shelf content changed and requires an update.

## Declaration

```swift
class func topShelfContentDidChange()
```

<a id="Discussion"></a>

## Discussion

Call this method when your top shelf content changes. This method notifies the system asynchronously and returns. You may call this method either from your app or from your Top Shelf app extension.

# topShelfContentDidChange (Objective-C)

**Framework:** TV Services  
**Kind:** Type Method  
**Availability:** tvOS 13.0+

Tells the system that your top shelf content changed and requires an update.

## Declaration

```objectivec
+ (void) topShelfContentDidChange;
```

<a id="Discussion"></a>

## Discussion

Call this method when your top shelf content changes. This method notifies the system asynchronously and returns. You may call this method either from your app or from your Top Shelf app extension.
