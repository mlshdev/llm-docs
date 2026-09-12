> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1811976-getstatistics](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1811976-getstatistics)

# getStatistics

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual UInt32 getStatistics(
 UInt64 *statistics, 
 UInt32statisticsMaxCount) const; 
```

## Parameters

- `statistics`: Buffer that will receive the UInt64 statistic values.
- `statisticsMaxCount`: Maximum number of statistic values that can be held in the buffer.

<a id="return_value"></a>

## Return Value

Actual number of statistic values copied to the buffer, or if no buffer is given, the total number of statistic values available.

<a id="overview"></a>

## Overview

Ask the driver to report its operating statistics.

The statistics are each indexed by IOBlockStorageDriver::Statistics indices. This routine fills the caller's buffer, up to the maximum count specified if the real number of statistics would overflow the buffer. The return value indicates the actual number of statistics copied to the buffer.

If the statistics buffer is not supplied or if the maximum count is zero, the routine returns the proposed count of statistics instead.

## See Also

### Miscellaneous

- [acceptNewMedia](1811574-acceptnewmedia.md): React to new media insertion.
- [addToBytesTransferred](1811596-addtobytestransferred.md)
- [allocateContext](1811624-allocatecontext.md)
- [breakUpRequest](1811639-breakuprequest.md)
- [checkForMedia](1811654-checkformedia.md): Check if media has newly arrived or disappeared.
- [constrainByteCount](1811669-constrainbytecount.md): Constrain the byte count for this IO to device limits.
- [copyPhysicalExtent](1811687-copyphysicalextent.md)
- [deblockRequest](1811703-deblockrequest.md)
- [decommissionMedia](1811732-decommissionmedia.md): Decommission an existing piece of media that has gone away.
- [deleteContext](1811760-deletecontext.md)
- [ejectMedia](1811792-ejectmedia.md)
- [executeRequest](1811817-executerequest.md)
- [formatMedia](1811835-formatmedia.md)
- [getDeviceTypeName](1811863-getdevicetypename.md): Return the desired device name.
- [getFormatCapacities](1811884-getformatcapacities.md)
- [getMediaBlockSize](1811916-getmediablocksize.md)
- [getMediaState](1811940-getmediastate.md)
- [getStatistic](1811958-getstatistic.md)
- [handleClose](1811990-handleclose.md)
- [handleIsOpen](1811999-handleisopen.md)
- [handleOpen](1812007-handleopen.md)
- [handleStart](1812019-handlestart.md)
- [incrementErrors](1812024-incrementerrors.md)
- [incrementRetries](1812030-incrementretries.md)
- [initMediaState](1812034-initmediastate.md): Initialize media-related instance variables.
- [instantiateDesiredMediaObject](1812038-instantiatedesiredmediaobject.md): Create an IOMedia object for media.
- [instantiateMediaObject](1812042-instantiatemediaobject.md): Create an IOMedia object for media.
- [isMediaEjectable](1812044-ismediaejectable.md)
- [isMediaRemovable](1812049-ismediaremovable.md)
- [isMediaWritable](1812052-ismediawritable.md)
- [lockPhysicalExtents](1812055-lockphysicalextents.md)
- [mediaStateHasChanged](1812057-mediastatehaschanged.md): React to a new media insertion or a media removal.
- [prepareRequest](1812063-preparerequest.md)
- [read](1812076-read.md)
- [recordMediaParameters](1812090-recordmediaparameters.md): Obtain media-related parameters on media insertion.
- [rejectMedia](1812100-rejectmedia.md): Reject new media.
- [requestIdle](1812117-requestidle.md): Request that the device enter an idle state.
- [synchronizeCache](1812132-synchronizecache.md)
- [unlockPhysicalExtents](1812149-unlockphysicalextents.md)
- [unmap](1812179-unmap.md)
- [validateNewMedia](1812204-validatenewmedia.md): Verify that new media is acceptable.
- [write](1812222-write.md)
