> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1572726-special_handler_callback_constan](https://developer.apple.com/documentation/coreservices/apple_events/1572726-special_handler_callback_constan)

# Special Handler Callback Constants

**Framework:** Core Services

Specify an object callback function to install, get, or remove from the special handler dispatch table.

<a id="overview"></a>

## Overview

You use these constants with the [AEInstallSpecialHandler(\_:\_:\_:)](../1445532-aeinstallspecialhandler.md), [AEGetSpecialHandler(\_:\_:\_:)](../1444274-aegetspecialhandler.md), or [AERemoveSpecialHandler(\_:\_:\_:)](../1447960-aeremovespecialhandler.md) functions.

## Topics

### Constants

- [keyAERangeStart](../keyaerangestart.md): Specifies the first Apple event object in a desired range.
- [keyAERangeStop](../keyaerangestop.md): Specifies the last Apple event object in the desired range.
- [keyDisposeTokenProc](../keydisposetokenproc.md): Token disposal function. See [OSLDisposeTokenProcPtr](../osldisposetokenprocptr.md).
- [keyAECompareProc](../keyaecompareproc.md): Object-comparison function. See [OSLCompareProcPtr](../oslcompareprocptr.md).
- [keyAECountProc](../keyaecountproc.md): Object-counting function. See [OSLCountProcPtr](../oslcountprocptr.md).
- [keyAEMarkTokenProc](../keyaemarktokenproc.md): Mark token function. See [OSLGetMarkTokenProcPtr](../oslgetmarktokenprocptr.md).
- [keyAEMarkProc](../keyaemarkproc.md): Object-marking function. See [OSLMarkProcPtr](../oslmarkprocptr.md).
- [keyAEAdjustMarksProc](../keyaeadjustmarksproc.md): Mark-adjusting function. See [OSLAdjustMarksProcPtr](../osladjustmarksprocptr.md).
- [keyAEGetErrDescProc](../keyaegeterrdescproc.md): Get error descriptor callback function. See [OSLGetErrDescProcPtr](../oslgeterrdescprocptr.md).
