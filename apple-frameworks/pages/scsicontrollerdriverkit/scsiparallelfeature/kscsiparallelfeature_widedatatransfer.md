> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/scsiparallelfeature/kscsiparallelfeature_widedatatransfer](https://developer.apple.com/documentation/scsicontrollerdriverkit/scsiparallelfeature/kscsiparallelfeature_widedatatransfer)

# kSCSIParallelFeature_WideDataTransfer

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit

The selector for support of wide data transfers.

## Declaration

```objectivec
kSCSIParallelFeature_WideDataTransfer
```

<a id="discussion"></a>

## Discussion

The framework only supports `Wide16` because the SPI-3 specification obsoleted `Wide32`.

## See Also

### Feature selectors

- [kSCSIParallelFeature_SynchronousDataTransfer](kscsiparallelfeature_synchronousdatatransfer.md): The selector for support of synchronous data transfers.
- [kSCSIParallelFeature_QuickArbitrationAndSelection](kscsiparallelfeature_quickarbitrationandselection.md): The selector for support of quick arbitration and selection (QAS).
- [kSCSIParallelFeature_DoubleTransitionDataTransfers](kscsiparallelfeature_doubletransitiondatatransfers.md): The selector for support of double transition (DT) data transfers.
- [kSCSIParallelFeature_InformationUnitTransfers](kscsiparallelfeature_informationunittransfers.md): The selector for SPI information unit (IU) transfers.
- [kSCSIParallelFeature_TotalFeatureCount](kscsiparallelfeature_totalfeaturecount.md): The total number of supported features.
