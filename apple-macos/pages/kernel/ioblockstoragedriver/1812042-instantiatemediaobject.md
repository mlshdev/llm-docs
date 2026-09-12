> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedriver/1812042-instantiatemediaobject](https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1812042-instantiatemediaobject)

# instantiateMediaObject

**Interface language:** Objective-C

**Framework:** Kernel

Create an IOMedia object for media.

## Declaration

```objectivec
virtual IOMedia * instantiateMediaObject(
 UInt64base,
 UInt64byteSize, 
 UInt32blockSize,
 char *mediaName); 
```

## Parameters

- `base`: Byte number of beginning of active data area of the media. Usually zero.
- `byteSize`: Size of the data area of the media, in bytes.
- `blockSize`: Block size of the media, in bytes.
- `mediaName`: Name of the IOMedia object.

<a id="return_value"></a>

## Return Value

A pointer to the created IOMedia object, or a null on error.

<a id="overview"></a>

## Overview

This method creates an IOMedia object from the supplied parameters. It is a convenience method to wrap the handful of steps to do the job.

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
- [getStatistics](1811976-getstatistics.md)
- [handleClose](1811990-handleclose.md)
- [handleIsOpen](1811999-handleisopen.md)
- [handleOpen](1812007-handleopen.md)
- [handleStart](1812019-handlestart.md)
- [incrementErrors](1812024-incrementerrors.md)
- [incrementRetries](1812030-incrementretries.md)
- [initMediaState](1812034-initmediastate.md): Initialize media-related instance variables.
- [instantiateDesiredMediaObject](1812038-instantiatedesiredmediaobject.md): Create an IOMedia object for media.
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
