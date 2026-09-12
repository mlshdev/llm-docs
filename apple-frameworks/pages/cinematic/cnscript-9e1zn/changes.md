> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/changes](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/changes)

# changes

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Changes made since recording the Cinematic asset.

## Declaration

```objectivec
- (CNScriptChanges *) changes;
```

<a id="return-value"></a>

## Return Value

The changes made since recording the Cinematic asset.

<a id="Discussion"></a>

## Discussion

You can use it to checkpoint and later restore changes made to the Cinematic asset.
