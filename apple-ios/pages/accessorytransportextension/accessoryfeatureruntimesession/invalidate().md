> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesession/invalidate()

# invalidate()

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Unregisters the session.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

Call this method when your app’s exchange with the data provider extension is complete but before releasing an active session. The system throws an error if your app releases an active session without invalidating it.

## Default Implementations

### AccessoryFeatureRuntimeSession Implementations

- [invalidate()](invalidate%28%29-6sewy.md): Beta.

## See Also

### Managing the session life cycle

- [activate()](activate%28%29.md): Beta. Registers the session and requests that the system start it.
