> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate)

# MTROTAProviderDelegate (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
protocol MTROTAProviderDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [handleApplyUpdateRequest(forNodeID:controller:params:completion:)](mtrotaproviderdelegate/handleapplyupdaterequest%28fornodeid_controller_params_completion_%29.md)
- [handleApplyUpdateRequest(forNodeID:controller:params:completionHandler:)](mtrotaproviderdelegate/handleapplyupdaterequest%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleBDXQuery(forNodeID:controller:blockSize:blockIndex:bytesToSkip:completion:)](mtrotaproviderdelegate/handlebdxquery%28fornodeid_controller_blocksize_blockindex_bytestoskip_completion_%29.md)
- [handleBDXQuery(forNodeID:controller:blockSize:blockIndex:bytesToSkip:completionHandler:)](mtrotaproviderdelegate/handlebdxquery%28fornodeid_controller_blocksize_blockindex_bytestoskip_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionBegin(forNodeID:controller:fileDesignator:offset:completion:)](mtrotaproviderdelegate/handlebdxtransfersessionbegin%28fornodeid_controller_filedesignator_offset_completion_%29.md)
- [handleBDXTransferSessionBegin(forNodeID:controller:fileDesignator:offset:completionHandler:)](mtrotaproviderdelegate/handlebdxtransfersessionbegin%28fornodeid_controller_filedesignator_offset_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionEnd(forNodeID:controller:error:)](mtrotaproviderdelegate/handlebdxtransfersessionend%28fornodeid_controller_error_%29.md): Deprecated.
- [handleNotifyUpdateApplied(forNodeID:controller:params:completion:)](mtrotaproviderdelegate/handlenotifyupdateapplied%28fornodeid_controller_params_completion_%29.md)
- [handleNotifyUpdateApplied(forNodeID:controller:params:completionHandler:)](mtrotaproviderdelegate/handlenotifyupdateapplied%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleQueryImage(forNodeID:controller:params:completion:)](mtrotaproviderdelegate/handlequeryimage%28fornodeid_controller_params_completion_%29.md)
- [handleQueryImage(forNodeID:controller:params:completionHandler:)](mtrotaproviderdelegate/handlequeryimage%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionEnd(forNodeID:controller:metrics:error:)](mtrotaproviderdelegate/handlebdxtransfersessionend%28fornodeid_controller_metrics_error_%29.md): Notify the delegate when a BDX Session ends for some node. The controller identifies the fabric the node is on, and the nodeID identifies the node within that fabric.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTROTAProviderDelegate (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
@protocol MTROTAProviderDelegate <NSObject>
```

## Topics

### Instance Methods

- [handleApplyUpdateRequestForNodeID:controller:params:completion:](mtrotaproviderdelegate/handleapplyupdaterequest%28fornodeid_controller_params_completion_%29.md)
- [handleApplyUpdateRequestForNodeID:controller:params:completionHandler:](mtrotaproviderdelegate/handleapplyupdaterequest%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleBDXQueryForNodeID:controller:blockSize:blockIndex:bytesToSkip:completion:](mtrotaproviderdelegate/handlebdxquery%28fornodeid_controller_blocksize_blockindex_bytestoskip_completion_%29.md)
- [handleBDXQueryForNodeID:controller:blockSize:blockIndex:bytesToSkip:completionHandler:](mtrotaproviderdelegate/handlebdxquery%28fornodeid_controller_blocksize_blockindex_bytestoskip_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionBeginForNodeID:controller:fileDesignator:offset:completion:](mtrotaproviderdelegate/handlebdxtransfersessionbegin%28fornodeid_controller_filedesignator_offset_completion_%29.md)
- [handleBDXTransferSessionBeginForNodeID:controller:fileDesignator:offset:completionHandler:](mtrotaproviderdelegate/handlebdxtransfersessionbegin%28fornodeid_controller_filedesignator_offset_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionEndForNodeID:controller:error:](mtrotaproviderdelegate/handlebdxtransfersessionend%28fornodeid_controller_error_%29.md): Deprecated.
- [handleNotifyUpdateAppliedForNodeID:controller:params:completion:](mtrotaproviderdelegate/handlenotifyupdateapplied%28fornodeid_controller_params_completion_%29.md)
- [handleNotifyUpdateAppliedForNodeID:controller:params:completionHandler:](mtrotaproviderdelegate/handlenotifyupdateapplied%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleQueryImageForNodeID:controller:params:completion:](mtrotaproviderdelegate/handlequeryimage%28fornodeid_controller_params_completion_%29.md)
- [handleQueryImageForNodeID:controller:params:completionHandler:](mtrotaproviderdelegate/handlequeryimage%28fornodeid_controller_params_completionhandler_%29.md): Deprecated.
- [handleBDXTransferSessionEndForNodeID:controller:metrics:error:](mtrotaproviderdelegate/handlebdxtransfersessionend%28fornodeid_controller_metrics_error_%29.md): Notify the delegate when a BDX Session ends for some node. The controller identifies the fabric the node is on, and the nodeID identifies the node within that fabric.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
