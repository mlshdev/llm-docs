> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioreporter_ivars/handleswapprepare

# handleSwapPrepare

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn handleSwapPrepare(int newNChannels);
```

## Parameters

- `newNChannels`: Target number of channels

<a id="return-value"></a>

## Return Value

IOReturn code

<a id="discussion"></a>

## Discussion

Allocate memory in preparation for an instance variable swap

::handleSwapPrepare() is responsible for allocating appropriately- sized buffers (based on the new number of channels) and storing them in \_swap\* instance variables.  If returning and error, it must deallocate any buffers and set to NULL any \_swap\* variables.

Locking: The caller must ensure that the *config* lock is HELD but that the reporter (data) lock is *NOT HELD*.
