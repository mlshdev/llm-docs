> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/file_manager](https://developer.apple.com/documentation/coreservices/carbon_core/file_manager)

# File Manager

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Interact with files, folders, and volumes.

> File Manager is deprecated in macOS 10.8 and later. The Foundation and Core Foundation frameworks provide APIs that you can use to replace File Manager functions in your app. See [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672).
>
> To get notifications when a folder changes, use the File System Events API. See [File System Events Programming Guide](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/FSEvents_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005289). 
>
> To mount a local volume, use the Disk Arbitration API. You can unmount or eject a local volume by calling the [unmountVolumeAtURL:options:completionHandler:](../../foundation/filemanager/unmountvolume%28at_options_completionhandler_%29.md) method. See [Disk Arbitration Programming Guide](https://developer.apple.com/library/archive/documentation/DriversKernelHardware/Conceptual/DiskArbitrationProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009310). 
>
> For low-level access, use POSIX and BSD APIs.

<a id="overview"></a>

## Overview

> **Warning**

> Using File Manager APIs on volumes formatted with APFS is strongly discouraged. 
>
> Some functions, like [FSExchangeObjects](../1565474-fsexchangeobjects.md), aren't supported in APFS. Other functions may have different in behaviors APFS and HFS+, such as the returned order of directory entries by [FSGetCatalogInfoBulk](../1566447-fsgetcataloginfobulk.md), or how  file modification times are calculated by [FSGetCatalogInfo](../1565356-fsgetcataloginfo.md). Several File Manager APIs interact with the [FSRef](../fsref.md) structure (also deprecated), which uses 32-bit inode numbers. This interaction can cause performance issues in APFS, which uses 64-bit inode numbers.
>
> Whenever possible, use high-level APIs from [Foundation](https://developer.apple.com/library/archive/technotes/tn2239/_index.html#//apple_ref/doc/uid/DTS40010638-CH1-SUBSECTION30) and [Core Foundation](https://developer.apple.com/library/archive/technotes/tn2124/_index.html#//apple_ref/doc/uid/DTS10003391-CH1-SECCF).

## Topics

### High-Level File Operations

- [FSFileOperationCopyStatus](../1566279-fsfileoperationcopystatus.md): Deprecated.
- [FSPathFileOperationCopyStatus](../1566335-fspathfileoperationcopystatus.md): Deprecated.
- [FSCopyObjectAsync](../1566285-fscopyobjectasync.md): Deprecated.
- [FSMoveObjectAsync](../1566762-fsmoveobjectasync.md): Deprecated.
- [FSPathCopyObjectAsync](../1566056-fspathcopyobjectasync.md): Deprecated.
- [FSPathMoveObjectAsync](../1566169-fspathmoveobjectasync.md): Deprecated.
- [FSFileOperationCancel](../1565866-fsfileoperationcancel.md): Deprecated.
- [FSFileOperationCreate](../1566666-fsfileoperationcreate.md): Deprecated.
- [FSFileOperationGetTypeID](../1565673-fsfileoperationgettypeid.md): Deprecated.
- [FSFileOperationScheduleWithRunLoop](../1565845-fsfileoperationschedulewithrunlo.md): Deprecated.
- [FSFileOperationUnscheduleFromRunLoop](../1565483-fsfileoperationunschedulefromrun.md): Deprecated.
- [FSCopyObjectSync](../1565258-fscopyobjectsync.md): Deprecated.
- [FSMoveObjectSync](../1566525-fsmoveobjectsync.md): Deprecated.
- [FSPathCopyObjectSync](../1565384-fspathcopyobjectsync.md): Deprecated.
- [FSPathMoveObjectSync](../1566022-fspathmoveobjectsync.md): Deprecated.

### Accessing Information About Files and Directories

- [PBGetCatalogInfoAsync](../1565934-pbgetcataloginfoasync.md): Deprecated.
- [PBGetCatalogInfoSync](../1566328-pbgetcataloginfosync.md): Deprecated.
- [PBSetCatalogInfoAsync](../1566340-pbsetcataloginfoasync.md): Deprecated.
- [PBSetCatalogInfoSync](../1565271-pbsetcataloginfosync.md): Deprecated.
- [FSSetCatalogInfo](../1566580-fssetcataloginfo.md): Deprecated.
- [FSGetCatalogInfo](../1565356-fsgetcataloginfo.md): Deprecated.

### Allocating Storage for Forks

- [FSAllocateFork](../1566175-fsallocatefork.md): Deprecated.
- [PBAllocateForkSync](../1565523-pballocateforksync.md): Deprecated.
- [PBAllocateForkAsync](../1566083-pballocateforkasync.md): Deprecated.

### Comparing File System References

- [FSCompareFSRefs](../1565571-fscomparefsrefs.md): Deprecated.
- [PBCompareFSRefsAsync](../1566717-pbcomparefsrefsasync.md): Deprecated.
- [PBCompareFSRefsSync](../1566817-pbcomparefsrefssync.md): Deprecated.

### Converting Between Paths and FSRef Structures

- [FSRefMakePath](../1565635-fsrefmakepath.md): Deprecated.
- [FSPathMakeRef](../1565195-fspathmakeref.md): Deprecated.
- [FSPathMakeRefWithOptions](../1566339-fspathmakerefwithoptions.md): Deprecated.

### Creating a File System Reference (FSRef)

- [FSMakeFSRefUnicode](../1565210-fsmakefsrefunicode.md): Deprecated.
- [PBMakeFSRefUnicodeSync](../1566925-pbmakefsrefunicodesync.md): Deprecated.
- [PBMakeFSRefUnicodeAsync](../1566268-pbmakefsrefunicodeasync.md): Deprecated.

### Creating and Deleting Named Forks

- [FSCreateFork](../1565554-fscreatefork.md): Deprecated.
- [FSDeleteFork](../1565370-fsdeletefork.md): Deprecated.
- [PBCreateForkSync](../1566697-pbcreateforksync.md): Deprecated.
- [PBDeleteForkAsync](../1566752-pbdeleteforkasync.md): Deprecated.
- [PBDeleteForkSync](../1566822-pbdeleteforksync.md): Deprecated.

### Creating Directories

- [PBCreateDirectoryUnicodeSync](../1565315-pbcreatedirectoryunicodesync.md): Deprecated.
- [PBCreateDirectoryUnicodeAsync](../1565107-pbcreatedirectoryunicodeasync.md): Deprecated.
- [FSCreateDirectoryUnicode](../1565979-fscreatedirectoryunicode.md): Deprecated.

### Creating Files

- [PBCreateFileUnicodeSync](../1566896-pbcreatefileunicodesync.md): Deprecated.
- [PBCreateFileUnicodeAsync](../1565280-pbcreatefileunicodeasync.md): Deprecated.

### Creating, Invoking, and Disposing Universal Procedure Pointers to Completion Functions

- [NewIOCompletionUPP](../1565869-newiocompletionupp.md): Deprecated.
- [InvokeIOCompletionUPP](../1565303-invokeiocompletionupp.md): Deprecated.
- [DisposeIOCompletionUPP](../1566947-disposeiocompletionupp.md): Deprecated.

### Deleting Files and Directories

- [PBDeleteObjectSync](../1565966-pbdeleteobjectsync.md): Deprecated.
- [PBDeleteObjectAsync](../1566325-pbdeleteobjectasync.md): Deprecated.
- [FSDeleteObject](../1566089-fsdeleteobject.md): Deprecated.

### Determining the Unicode Names of the Data and Resource Forks

- [FSGetDataForkName](../1566760-fsgetdataforkname.md): Deprecated.
- [FSGetResourceForkName](../1566158-fsgetresourceforkname.md): Deprecated.

### Exchanging the Contents of Two Files

- [FSExchangeObjects](../1565474-fsexchangeobjects.md): Deprecated.
- [PBExchangeObjectsSync](../1566627-pbexchangeobjectssync.md): Deprecated.
- [PBExchangeObjectsAsync](../1566021-pbexchangeobjectsasync.md): Deprecated.

### Getting and Setting Volume Information

- [FSGetVolumeInfo](../1566350-fsgetvolumeinfo.md): Deprecated.
- [FSSetVolumeInfo](../1565574-fssetvolumeinfo.md): Deprecated.
- [PBGetVolumeInfoAsync](../1565244-pbgetvolumeinfoasync.md): Deprecated.
- [PBGetVolumeInfoSync](../1566892-pbgetvolumeinfosync.md): Deprecated.
- [PBSetVolumeInfoAsync](../1566541-pbsetvolumeinfoasync.md): Deprecated.
- [PBSetVolumeInfoSync](../1566427-pbsetvolumeinfosync.md): Deprecated.

### Iterating Over Named Forks

- [PBIterateForksSync](../1566093-pbiterateforkssync.md): Deprecated.
- [PBIterateForksAsync](../1566251-pbiterateforksasync.md): Deprecated.
- [FSIterateForks](../1565757-fsiterateforks.md): Deprecated.

### Manipulating File and Fork Size

- [FSGetForkSize](../1565455-fsgetforksize.md): Deprecated.
- [PBGetForkSizeAsync](../1565453-pbgetforksizeasync.md): Deprecated.
- [PBGetForkSizeSync](../1566956-pbgetforksizesync.md): Deprecated.
- [FSSetForkSize](../1566185-fssetforksize.md): Deprecated.
- [PBSetForkSizeSync](../1566944-pbsetforksizesync.md): Deprecated.
- [PBSetForkSizeAsync](../1566552-pbsetforksizeasync.md): Deprecated.

### Manipulating File Position

- [FSGetForkPosition](../1565089-fsgetforkposition.md): Deprecated.
- [PBSetForkPositionSync](../1566035-pbsetforkpositionsync.md): Deprecated.
- [PBGetForkPositionSync](../1565594-pbgetforkpositionsync.md): Deprecated.
- [PBGetForkPositionAsync](../1566418-pbgetforkpositionasync.md): Deprecated.
- [FSSetForkPosition](../1566508-fssetforkposition.md): Deprecated.
- [PBSetForkPositionAsync](../1565887-pbsetforkpositionasync.md): Deprecated.

### Moving and Renaming Files or Directories

- [PBMoveObjectSync](../1565935-pbmoveobjectsync.md): Deprecated.
- [FSMoveObjectAsync](../1566762-fsmoveobjectasync.md): Deprecated.
- [FSMoveObject](../1566291-fsmoveobject.md): Deprecated.
- [PBMoveObjectAsync](../1566270-pbmoveobjectasync.md): Deprecated.
- [PBRenameUnicodeAsync](../1566334-pbrenameunicodeasync.md): Deprecated.
- [PBRenameUnicodeSync](../1566879-pbrenameunicodesync.md): Deprecated.
- [FSRenameUnicode](../1565792-fsrenameunicode.md): Deprecated.

### Obtaining File and Directory Information Using a Catalog Iterator on HFS Plus Volumes

- [PBGetCatalogInfoBulkSync](../1565707-pbgetcataloginfobulksync.md): Deprecated.
- [FSGetCatalogInfoBulk](../1566447-fsgetcataloginfobulk.md): Deprecated.
- [PBGetCatalogInfoBulkAsync](../1566399-pbgetcataloginfobulkasync.md): Deprecated.

### Obtaining Fork Control Block Information

- [FSGetForkCBInfo](../1565345-fsgetforkcbinfo.md): Deprecated.
- [PBGetForkCBInfoSync](../1566258-pbgetforkcbinfosync.md): Deprecated.
- [PBGetForkCBInfoAsync](../1566027-pbgetforkcbinfoasync.md): Deprecated.

### Opening and Closing Catalog Iterators

- [FSCloseIterator](../1566681-fscloseiterator.md): Deprecated.
- [PBCloseIteratorAsync](../1566055-pbcloseiteratorasync.md): Deprecated.
- [PBOpenIteratorAsync](../1566686-pbopeniteratorasync.md): Deprecated.
- [FSOpenIterator](../1565368-fsopeniterator.md): Deprecated.
- [PBOpenIteratorSync](../1566865-pbopeniteratorsync.md): Deprecated.
- [PBCloseIteratorSync](../1566452-pbcloseiteratorsync.md): Deprecated.

### Opening Files

- [FSOpenFork](../1565689-fsopenfork.md): Deprecated.
- [PBOpenForkSync](../1566802-pbopenforksync.md): Deprecated.
- [PBOpenForkAsync](../1566059-pbopenforkasync.md): Deprecated.

### Reading, Writing, and Closing Files

- [FSReadFork](../1565997-fsreadfork.md): Deprecated.
- [PBReadForkAsync](../1566703-pbreadforkasync.md): Deprecated.
- [PBReadForkSync](../1566739-pbreadforksync.md): Deprecated.
- [PBWriteForkSync](../1565632-pbwriteforksync.md): Deprecated.
- [FSWriteFork](../1565526-fswritefork.md): Deprecated.
- [PBWriteForkAsync](../1566491-pbwriteforkasync.md): Deprecated.
- [FSCloseFork](../1566900-fsclosefork.md): Deprecated.
- [PBCloseForkSync](../1566173-pbcloseforksync.md): Deprecated.
- [PBCloseForkAsync](../1565189-pbcloseforkasync.md): Deprecated.

### Searching a Volume Using a Catalog Iterator

- [FSCatalogSearch](../1565862-fscatalogsearch.md): Deprecated.
- [PBCatalogSearchSync](../1565713-pbcatalogsearchsync.md): Deprecated.
- [PBCatalogSearchAsync](../1566401-pbcatalogsearchasync.md): Deprecated.

### Updating Files

- [FSFlushFork](../1566414-fsflushfork.md): Deprecated.
- [PBFlushForkSync](../1565853-pbflushforksync.md): Deprecated.
- [PBFlushForkAsync](../1565669-pbflushforkasync.md): Deprecated.

### Updating Volumes

- [FSFlushVolume](../1565506-fsflushvolume.md): Deprecated.
- [PBFlushVolumeSync](../1565550-pbflushvolumesync.md): Deprecated.
- [PBFlushVolumeAsync](../1566072-pbflushvolumeasync.md): Deprecated.

### Miscellaneous

- [DisposeFSVolumeEjectUPP](../disposefsvolumeejectupp.md)
- [DisposeFSVolumeEjectUPP](../1566754-disposefsvolumeejectupp.md): Deprecated.
- [DisposeFSVolumeMountUPP](../1565735-disposefsvolumemountupp.md): Deprecated.
- [DisposeFSVolumeMountUPP](../disposefsvolumemountupp.md)
- [DisposeFSVolumeUnmountUPP](../1565476-disposefsvolumeunmountupp.md): Deprecated.
- [DisposeFSVolumeUnmountUPP](../disposefsvolumeunmountupp.md)
- [FNNotify](../1565421-fnnotify.md): Deprecated.
- [FNNotifyAll](../1565760-fnnotifyall.md): Deprecated.
- [FNNotifyByPath](../1566346-fnnotifybypath.md): Deprecated.
- [FNSubscribe](../1565373-fnsubscribe.md): Deprecated.
- [FNSubscribeByPath](../1566843-fnsubscribebypath.md): Deprecated.
- [FNGetDirectoryForSubscription](../1566615-fngetdirectoryforsubscription.md): Deprecated.
- [FNUnsubscribe](../1565232-fnunsubscribe.md): Deprecated.
- [FSCancelVolumeOperation](../1565396-fscancelvolumeoperation.md): Deprecated.
- [FSCopyDiskIDForVolume](../1565655-fscopydiskidforvolume.md): Deprecated.
- [FSCreateVolumeOperation](../1566671-fscreatevolumeoperation.md): Deprecated.
- [FSDisposeVolumeOperation](../1565382-fsdisposevolumeoperation.md): Deprecated.
- [FSEjectVolumeSync](../1566031-fsejectvolumesync.md): Deprecated.
- [FSEjectVolumeAsync](../1566919-fsejectvolumeasync.md): Deprecated.
- [FSGetAsyncEjectStatus](../1565993-fsgetasyncejectstatus.md): Deprecated.
- [FSGetAsyncMountStatus](../1566519-fsgetasyncmountstatus.md): Deprecated.
- [FSGetAsyncUnmountStatus](../1565808-fsgetasyncunmountstatus.md): Deprecated.
- [FSMountServerVolumeSync](../1565166-fsmountservervolumesync.md): Deprecated.
- [FSMountServerVolumeAsync](../1565318-fsmountservervolumeasync.md): Deprecated.
- [FSMountLocalVolumeSync](../1566302-fsmountlocalvolumesync.md): Deprecated.
- [FSMountLocalVolumeAsync](../1565530-fsmountlocalvolumeasync.md): Deprecated.
- [FSUnmountVolumeSync](../1566764-fsunmountvolumesync.md): Deprecated.
- [FSUnmountVolumeAsync](../1566587-fsunmountvolumeasync.md): Deprecated.
- [InvokeFNSubscriptionUPP](../1565242-invokefnsubscriptionupp.md): Deprecated.
- [InvokeFSVolumeEjectUPP](../1565652-invokefsvolumeejectupp.md): Deprecated.
- [InvokeFSVolumeMountUPP](../1566167-invokefsvolumemountupp.md): Deprecated.
- [InvokeFSVolumeUnmountUPP](../1565842-invokefsvolumeunmountupp.md): Deprecated.
- [NewFNSubscriptionUPP](../1566945-newfnsubscriptionupp.md): Deprecated.
- [NewFSVolumeEjectUPP](../1566367-newfsvolumeejectupp.md): Deprecated.
- [NewFSVolumeMountUPP](../1565615-newfsvolumemountupp.md): Deprecated.
- [NewFSVolumeUnmountUPP](../1565539-newfsvolumeunmountupp.md): Deprecated.

### Structures

- [AFPAlternateAddress](../afpalternateaddress.md)
- [AFPTagData](../afptagdata.md)
- [AFPVolMountInfo](../afpvolmountinfo.md)
- [AFPXVolMountInfo](../afpxvolmountinfo.md)
- [FSCatalogBulkParam](../fscatalogbulkparam.md)
- [FSCatalogInfo](../fscataloginfo.md)
- [FSFileOperationClientContext](../fsfileoperationclientcontext.md)
- [FSForkCBInfoParam](../fsforkcbinfoparam.md)
- [FSForkIOParam](../fsforkioparam.md)
- [FSForkInfo](../fsforkinfo.md)
- [FSPermissionInfo](../fspermissioninfo.md)
- [FSRangeLockParam](../fsrangelockparam.md)
- [FSRef](../fsref.md): Identifies a directory or file, including a volume’s root directory.
- [FSRefForkIOParam](../fsrefforkioparam.md)
- [FSRefParam](../fsrefparam.md)
- [FSSearchParams](../fssearchparams.md)
- [FSSpec](../fsspec.md)
- [FSVolumeInfo](../fsvolumeinfo.md)
- [FSVolumeInfoParam](../fsvolumeinfoparam.md)

### Data Types

- [FSAliasInfoPtr](../fsaliasinfoptr.md)
- [FSAllocationFlags](../fsallocationflags.md)
- [FSCatalogBulkParamPtr](../fscatalogbulkparamptr.md)
- [FSCatalogInfoBitmap](../fscataloginfobitmap.md)
- [FSCatalogInfoPtr](../fscataloginfoptr.md)
- [FSEjectStatus](../fsejectstatus.md)
- [FSFileOperationRef](../fsfileoperationref.md)
- [FSFileOperationStage](../fsfileoperationstage.md)
- [FSFileOperationStatusProcPtr](../fsfileoperationstatusprocptr.md)
- [FSFileSecurityRef](../fsfilesecurityref.md)
- [FSForkCBInfoParamPtr](../fsforkcbinfoparamptr.md)
- [FSForkIOParamPtr](../fsforkioparamptr.md)
- [FSForkInfoFlags](../fsforkinfoflags.md)
- [FSForkInfoPtr](../fsforkinfoptr.md)
- [FSIORefNum](../fsiorefnum.md)
- [FSIterator](../fsiterator.md)
- [FSIteratorFlags](../fsiteratorflags.md)
- [FSMountStatus](../fsmountstatus.md)
- [FSPathFileOperationStatusProcPtr](../fspathfileoperationstatusprocptr.md)
- [FSRangeLockParamPtr](../fsrangelockparamptr.md)
- [FSRefForkIOParamPtr](../fsrefforkioparamptr.md)
- [FSRefParamPtr](../fsrefparamptr.md)
- [FSRefPtr](../fsrefptr.md)
- [FSSearchParamsPtr](../fssearchparamsptr.md)
- [FSSpecArrayPtr](../fsspecarrayptr.md)
- [FSSpecHandle](../fsspechandle.md)
- [FSSpecPtr](../fsspecptr.md)
- [FSUnmountStatus](../fsunmountstatus.md)
- [FSVolumeEjectProcPtr](../fsvolumeejectprocptr.md)
- [FSVolumeEjectUPP](../fsvolumeejectupp.md)
- [FSVolumeInfoBitmap](../fsvolumeinfobitmap.md)
- [FSVolumeInfoParamPtr](../fsvolumeinfoparamptr.md)
- [FSVolumeInfoPtr](../fsvolumeinfoptr.md)
- [FSVolumeMountProcPtr](../fsvolumemountprocptr.md)
- [FSVolumeMountUPP](../fsvolumemountupp.md)
- [FSVolumeOperation](../fsvolumeoperation.md)
- [FSVolumeRefNum](../fsvolumerefnum.md)
- [FSVolumeUnmountProcPtr](../fsvolumeunmountprocptr.md)
- [FSVolumeUnmountUPP](../fsvolumeunmountupp.md)

### Functions

- [FSAllocateFork](../1566175-fsallocatefork.md): Deprecated.
- [FSCancelVolumeOperation](../1565396-fscancelvolumeoperation.md): Deprecated.
- [FSCatalogSearch](../1565862-fscatalogsearch.md): Deprecated.
- [FSCloseFork](../1566900-fsclosefork.md): Deprecated.
- [FSCloseIterator](../1566681-fscloseiterator.md): Deprecated.
- [FSCompareFSRefs](../1565571-fscomparefsrefs.md): Deprecated.
- [FSCopyDADiskForVolume](../1565813-fscopydadiskforvolume.md): Deprecated.
- [FSCopyDiskIDForVolume](../1565655-fscopydiskidforvolume.md): Deprecated.
- [FSCopyURLForVolume](../1566159-fscopyurlforvolume.md): Deprecated.
- [FSCreateDirectoryUnicode](../1565979-fscreatedirectoryunicode.md): Deprecated.
- [FSCreateFileAndOpenForkUnicode](../1565699-fscreatefileandopenforkunicode.md): Deprecated.
- [FSCreateFileUnicode](../1565163-fscreatefileunicode.md): Deprecated.
- [FSCreateFork](../1565554-fscreatefork.md): Deprecated.
- [FSCreateResFile](../1529336-fscreateresfile.md): Deprecated.
- [FSCreateResourceFile](../1529242-fscreateresourcefile.md): Deprecated.
- [FSCreateResourceFork](../1529360-fscreateresourcefork.md): Deprecated.
- [FSCreateStringFromHFSUniStr](../1566957-fscreatestringfromhfsunistr.md): Deprecated.
- [FSCreateVolumeOperation](../1566671-fscreatevolumeoperation.md): Deprecated.
- [FSDeleteFork](../1565370-fsdeletefork.md): Deprecated.
- [FSDeleteObject](../1566089-fsdeleteobject.md): Deprecated.
- [FSDetermineIfRefIsEnclosedByFolder](../1389228-fsdetermineifrefisenclosedbyfold.md): Deprecated.
- [FSDisposeVolumeOperation](../1565382-fsdisposevolumeoperation.md): Deprecated.
- [FSEjectVolumeAsync](../1566919-fsejectvolumeasync.md): Deprecated.
- [FSEjectVolumeSync](../1566031-fsejectvolumesync.md): Deprecated.
- [FSExchangeObjects](../1565474-fsexchangeobjects.md): Deprecated.
- [FSFileSecurityCopyAccessControlList](../1565603-fsfilesecuritycopyaccesscontroll.md): Deprecated.
- [FSFileSecurityCreate](../1565742-fsfilesecuritycreate.md): Deprecated.
- [FSFileSecurityCreateWithFSPermissionInfo](../1566954-fsfilesecuritycreatewithfspermis.md): Deprecated.
- [FSFileSecurityGetGroup](../1565811-fsfilesecuritygetgroup.md): Deprecated.
- [FSFileSecurityGetGroupUUID](../1566799-fsfilesecuritygetgroupuuid.md): Deprecated.
- [FSFileSecurityGetMode](../1565106-fsfilesecuritygetmode.md): Deprecated.
- [FSFileSecurityGetOwner](../1566659-fsfilesecuritygetowner.md): Deprecated.
- [FSFileSecurityGetOwnerUUID](../1566694-fsfilesecuritygetowneruuid.md): Deprecated.
- [FSFileSecurityGetTypeID](../1565576-fsfilesecuritygettypeid.md): Deprecated.
- [FSFileSecurityRefCreateCopy](../1566223-fsfilesecurityrefcreatecopy.md): Deprecated.
- [FSFileSecuritySetAccessControlList](../1566029-fsfilesecuritysetaccesscontrolli.md): Deprecated.
- [FSFileSecuritySetGroup](../1565296-fsfilesecuritysetgroup.md): Deprecated.
- [FSFileSecuritySetGroupUUID](../1566445-fsfilesecuritysetgroupuuid.md): Deprecated.
- [FSFileSecuritySetMode](../1565105-fsfilesecuritysetmode.md): Deprecated.
- [FSFileSecuritySetOwner](../1566946-fsfilesecuritysetowner.md): Deprecated.
- [FSFileSecuritySetOwnerUUID](../1565207-fsfilesecuritysetowneruuid.md): Deprecated.
- [FSFindFolder](../1389059-fsfindfolder.md): Deprecated.
- [FSFlushFork](../1566414-fsflushfork.md): Deprecated.
- [FSFlushVolume](../1565506-fsflushvolume.md): Deprecated.
- [FSGetAsyncEjectStatus](../1565993-fsgetasyncejectstatus.md): Deprecated.
- [FSGetAsyncMountStatus](../1566519-fsgetasyncmountstatus.md): Deprecated.
- [FSGetAsyncUnmountStatus](../1565808-fsgetasyncunmountstatus.md): Deprecated.
- [FSGetCatalogInfoBulk](../1566447-fsgetcataloginfobulk.md): Deprecated.
- [FSGetDataForkName](../1566760-fsgetdataforkname.md): Deprecated.
- [FSGetForkCBInfo](../1565345-fsgetforkcbinfo.md): Deprecated.
- [FSGetForkPosition](../1565089-fsgetforkposition.md): Deprecated.
- [FSGetForkSize](../1565455-fsgetforksize.md): Deprecated.
- [FSGetHFSUniStrFromString](../1565877-fsgethfsunistrfromstring.md): Deprecated.
- [FSGetResourceForkName](../1566158-fsgetresourceforkname.md): Deprecated.
- [FSGetTemporaryDirectoryForReplaceObject](../1566436-fsgettemporarydirectoryforreplac.md): Deprecated.
- [FSGetVolumeForDADisk](../1566612-fsgetvolumefordadisk.md): Deprecated.
- [FSGetVolumeForDiskID](../1565529-fsgetvolumefordiskid.md): Deprecated.
- [FSGetVolumeInfo](../1566350-fsgetvolumeinfo.md): Deprecated.
- [FSGetVolumeMountInfo](../1565587-fsgetvolumemountinfo.md): Deprecated.
- [FSGetVolumeMountInfoSize](../1566473-fsgetvolumemountinfosize.md): Deprecated.
- [FSGetVolumeParms](../1565147-fsgetvolumeparms.md): Deprecated.
- [FSIsFSRefValid](../1565952-fsisfsrefvalid.md): Deprecated.
- [FSIterateForks](../1565757-fsiterateforks.md): Deprecated.
- [FSLockRange](../1566371-fslockrange.md): Deprecated.
- [FSMakeFSRefUnicode](../1565210-fsmakefsrefunicode.md): Deprecated.
- [FSMountLocalVolumeAsync](../1565530-fsmountlocalvolumeasync.md): Deprecated.
- [FSMountLocalVolumeSync](../1566302-fsmountlocalvolumesync.md): Deprecated.
- [FSMountServerVolumeAsync](../1565318-fsmountservervolumeasync.md): Deprecated.
- [FSMountServerVolumeSync](../1565166-fsmountservervolumesync.md): Deprecated.
- [FSMoveObject](../1566291-fsmoveobject.md): Deprecated.
- [FSMoveObjectToTrashAsync](../1565854-fsmoveobjecttotrashasync.md): Deprecated.
- [FSMoveObjectToTrashSync](../1566651-fsmoveobjecttotrashsync.md): Deprecated.
- [FSOpenFork](../1565689-fsopenfork.md): Deprecated.
- [FSOpenIterator](../1565368-fsopeniterator.md): Deprecated.
- [FSOpenOrphanResFile](../1529349-fsopenorphanresfile.md): Deprecated.
- [FSOpenResFile](../1529232-fsopenresfile.md): Deprecated.
- [FSOpenResourceFile](../1529373-fsopenresourcefile.md): Deprecated.
- [FSPathGetTemporaryDirectoryForReplaceObject](../1566163-fspathgettemporarydirectoryforre.md): Deprecated.
- [FSPathMakeRef](../1565195-fspathmakeref.md): Deprecated.
- [FSPathMakeRefWithOptions](../1566339-fspathmakerefwithoptions.md): Deprecated.
- [FSPathMoveObjectToTrashAsync](../1565270-fspathmoveobjecttotrashasync.md): Deprecated.
- [FSPathMoveObjectToTrashSync](../1566818-fspathmoveobjecttotrashsync.md): Deprecated.
- [FSPathReplaceObject](../1566463-fspathreplaceobject.md): Deprecated.
- [FSReadFork](../1565997-fsreadfork.md): Deprecated.
- [FSRefMakePath](../1565635-fsrefmakepath.md): Deprecated.
- [FSRenameUnicode](../1565792-fsrenameunicode.md): Deprecated.
- [FSReplaceObject](../1566736-fsreplaceobject.md): Deprecated.
- [FSResolveNodeID](../1565623-fsresolvenodeid.md): Deprecated.
- [FSResourceFileAlreadyOpen](../1529331-fsresourcefilealreadyopen.md): Deprecated.
- [FSSetForkPosition](../1566508-fssetforkposition.md): Deprecated.
- [FSSetForkSize](../1566185-fssetforksize.md): Deprecated.
- [FSSetVolumeInfo](../1565574-fssetvolumeinfo.md): Deprecated.
- [FSUnlinkObject](../1565924-fsunlinkobject.md): Deprecated.
- [FSUnlockRange](../1565302-fsunlockrange.md): Deprecated.
- [FSUnmountVolumeAsync](../1566587-fsunmountvolumeasync.md): Deprecated.
- [FSUnmountVolumeSync](../1566764-fsunmountvolumesync.md): Deprecated.
- [FSVolumeMount](../1566510-fsvolumemount.md): Deprecated.
- [FSWriteFork](../1565526-fswritefork.md): Deprecated.
- [PBAllocateForkAsync](../1566083-pballocateforkasync.md): Deprecated.
- [PBAllocateForkSync](../1565523-pballocateforksync.md): Deprecated.
- [PBCatalogSearchAsync](../1566401-pbcatalogsearchasync.md): Deprecated.
- [PBCatalogSearchSync](../1565713-pbcatalogsearchsync.md): Deprecated.
- [PBCloseForkAsync](../1565189-pbcloseforkasync.md): Deprecated.
- [PBCloseForkSync](../1566173-pbcloseforksync.md): Deprecated.
- [PBCloseIteratorAsync](../1566055-pbcloseiteratorasync.md): Deprecated.
- [PBCloseIteratorSync](../1566452-pbcloseiteratorsync.md): Deprecated.
- [PBCompareFSRefsAsync](../1566717-pbcomparefsrefsasync.md): Deprecated.
- [PBCompareFSRefsSync](../1566817-pbcomparefsrefssync.md): Deprecated.
- [PBCreateDirectoryUnicodeAsync](../1565107-pbcreatedirectoryunicodeasync.md): Deprecated.
- [PBCreateDirectoryUnicodeSync](../1565315-pbcreatedirectoryunicodesync.md): Deprecated.
- [PBCreateFileAndOpenForkUnicodeAsync](../1566593-pbcreatefileandopenforkunicodeas.md): Deprecated.
- [PBCreateFileAndOpenForkUnicodeSync](../1566046-pbcreatefileandopenforkunicodesy.md): Deprecated.
- [PBCreateFileUnicodeAsync](../1565280-pbcreatefileunicodeasync.md): Deprecated.
- [PBCreateFileUnicodeSync](../1566896-pbcreatefileunicodesync.md): Deprecated.
- [PBCreateForkAsync](../1565676-pbcreateforkasync.md): Deprecated.
- [PBCreateForkSync](../1566697-pbcreateforksync.md): Deprecated.
- [PBDeleteForkAsync](../1566752-pbdeleteforkasync.md): Deprecated.
- [PBDeleteForkSync](../1566822-pbdeleteforksync.md): Deprecated.
- [PBDeleteObjectAsync](../1566325-pbdeleteobjectasync.md): Deprecated.
- [PBDeleteObjectSync](../1565966-pbdeleteobjectsync.md): Deprecated.
- [PBExchangeObjectsAsync](../1566021-pbexchangeobjectsasync.md): Deprecated.
- [PBExchangeObjectsSync](../1566627-pbexchangeobjectssync.md): Deprecated.
- [PBFSCopyFileAsync](../1565810-pbfscopyfileasync.md): Deprecated.
- [PBFSCopyFileSync](../1566297-pbfscopyfilesync.md): Deprecated.
- [PBFSResolveNodeIDAsync](../1566562-pbfsresolvenodeidasync.md): Deprecated.
- [PBFSResolveNodeIDSync](../1565133-pbfsresolvenodeidsync.md): Deprecated.
- [PBFlushForkAsync](../1565669-pbflushforkasync.md): Deprecated.
- [PBFlushForkSync](../1565853-pbflushforksync.md): Deprecated.
- [PBFlushVolumeAsync](../1566072-pbflushvolumeasync.md): Deprecated.
- [PBFlushVolumeSync](../1565550-pbflushvolumesync.md): Deprecated.
- [PBGetCatalogInfoBulkAsync](../1566399-pbgetcataloginfobulkasync.md): Deprecated.
- [PBGetCatalogInfoBulkSync](../1565707-pbgetcataloginfobulksync.md): Deprecated.
- [PBGetForkCBInfoAsync](../1566027-pbgetforkcbinfoasync.md): Deprecated.
- [PBGetForkCBInfoSync](../1566258-pbgetforkcbinfosync.md): Deprecated.
- [PBGetForkPositionAsync](../1566418-pbgetforkpositionasync.md): Deprecated.
- [PBGetForkPositionSync](../1565594-pbgetforkpositionsync.md): Deprecated.
- [PBGetForkSizeAsync](../1565453-pbgetforksizeasync.md): Deprecated.
- [PBGetForkSizeSync](../1566956-pbgetforksizesync.md): Deprecated.
- [PBGetVolumeInfoAsync](../1565244-pbgetvolumeinfoasync.md): Deprecated.
- [PBGetVolumeInfoSync](../1566892-pbgetvolumeinfosync.md): Deprecated.
- [PBIterateForksAsync](../1566251-pbiterateforksasync.md): Deprecated.
- [PBIterateForksSync](../1566093-pbiterateforkssync.md): Deprecated.
- [PBMakeFSRefUnicodeAsync](../1566268-pbmakefsrefunicodeasync.md): Deprecated.
- [PBMakeFSRefUnicodeSync](../1566925-pbmakefsrefunicodesync.md): Deprecated.
- [PBMoveObjectAsync](../1566270-pbmoveobjectasync.md): Deprecated.
- [PBMoveObjectSync](../1565935-pbmoveobjectsync.md): Deprecated.
- [PBOpenForkAsync](../1566059-pbopenforkasync.md): Deprecated.
- [PBOpenForkSync](../1566802-pbopenforksync.md): Deprecated.
- [PBOpenIteratorAsync](../1566686-pbopeniteratorasync.md): Deprecated.
- [PBOpenIteratorSync](../1566865-pbopeniteratorsync.md): Deprecated.
- [PBReadForkAsync](../1566703-pbreadforkasync.md): Deprecated.
- [PBReadForkSync](../1566739-pbreadforksync.md): Deprecated.
- [PBRenameUnicodeAsync](../1566334-pbrenameunicodeasync.md): Deprecated.
- [PBRenameUnicodeSync](../1566879-pbrenameunicodesync.md): Deprecated.
- [PBSetForkPositionAsync](../1565887-pbsetforkpositionasync.md): Deprecated.
- [PBSetForkPositionSync](../1566035-pbsetforkpositionsync.md): Deprecated.
- [PBSetForkSizeAsync](../1566552-pbsetforksizeasync.md): Deprecated.
- [PBSetForkSizeSync](../1566944-pbsetforksizesync.md): Deprecated.
- [PBSetVolumeInfoAsync](../1566541-pbsetvolumeinfoasync.md): Deprecated.
- [PBSetVolumeInfoSync](../1566427-pbsetvolumeinfosync.md): Deprecated.
- [PBUnlinkObjectAsync](../1565840-pbunlinkobjectasync.md): Deprecated.
- [PBUnlinkObjectSync](../1566516-pbunlinkobjectsync.md): Deprecated.
- [PBWriteForkAsync](../1566491-pbwriteforkasync.md): Deprecated.
- [PBWriteForkSync](../1565632-pbwriteforksync.md): Deprecated.

### Constants

- [kFSOperationBytesCompleteKey](../kfsoperationbytescompletekey.md): Deprecated.
- [kFSOperationBytesRemainingKey](../kfsoperationbytesremainingkey.md): Deprecated.
- [kFSOperationObjectsCompleteKey](../kfsoperationobjectscompletekey.md): Deprecated.
- [kFSOperationObjectsRemainingKey](../kfsoperationobjectsremainingkey.md): Deprecated.
- [kFSOperationThroughputKey](../kfsoperationthroughputkey.md): Deprecated.
- [kFSOperationTotalBytesKey](../kfsoperationtotalbyteskey.md): Deprecated.
- [kFSOperationTotalObjectsKey](../kfsoperationtotalobjectskey.md): Deprecated.
- [kFSOperationTotalUserVisibleObjectsKey](../kfsoperationtotaluservisibleobjectskey.md): Deprecated.
- [kFSOperationUserVisibleObjectsCompleteKey](../kfsoperationuservisibleobjectscompletekey.md): Deprecated.
- [kFSOperationUserVisibleObjectsRemainingKey](../kfsoperationuservisibleobjectsremainingkey.md): Deprecated.

## See Also

### Managers

- [Alias Manager](alias_manager.md): Deprecated. Create and resolve alias records that describe file system objects such as files, directories, and volumes.
- [Component Manager](component_manager.md): Deprecated. Find and use components in your app or add custom components to system-provided services, such as QuickTime and Core Audio.
- [Gestalt Manager](gestalt_manager.md): Deprecated. Investigate the operating environment of your app.
- [Text Encoding Conversion Manager](text_encoding_conversion_manager.md): Deprecated. Handle text encoding conversion between apps and transfer text across different platforms.
