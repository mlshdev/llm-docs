> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/getname

# GetName

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the name of the object.

## Declaration

```objectivec
OSSharedPtr<OSString> GetName();
```

<a id="return-value"></a>

## Return Value

A `OSSharedPtr` to an [OSString](../../driverkit/osstring.md) containing the object name.

<a id="Discussion"></a>

## Discussion

Getting the name synchronizes by using the work queue created by the object.

## See Also

### Working with Object Names

- [SetName](setname.md): Sets the name of the object.
