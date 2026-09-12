> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct)

# NSNotification.Name (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure that defines the name of a notification.

## Declaration

```swift
struct Name
```

## Topics

### AddressBook

- [abDatabaseChanged](name-swift.struct/abdatabasechanged.md): Posted when this process has changed the Address Book database.
- [abDatabaseChangedExternally](name-swift.struct/abdatabasechangedexternally.md): Posted when a process other than the current one has changed the Address Book database.
- [ABPeoplePickerDisplayedPropertyDidChange](name-swift.struct/abpeoplepickerdisplayedpropertydidchange.md): Posted when the displayed property in the record list is changed.
- [ABPeoplePickerGroupSelectionDidChange](name-swift.struct/abpeoplepickergroupselectiondidchange.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChange](name-swift.struct/abpeoplepickernameselectiondidchange.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChange](name-swift.struct/abpeoplepickervalueselectiondidchange.md): Posted when the selection in a multivalue property is changed.

### AppKit

- [unsupportedAttributeAddedNotification](name-swift.struct/unsupportedattributeaddednotification.md)
- [didProcessEditingNotification](https://developer.apple.com/documentation/appkit/nstextstorage/didprocesseditingnotification): A notification that posts after a text storage finishes processing edits.
- [willProcessEditingNotification](https://developer.apple.com/documentation/appkit/nstextstorage/willprocesseditingnotification): A notification that posts before a text storage begins processing edits.
- [didChangeSelectionNotification](https://developer.apple.com/documentation/appkit/nstextview/didchangeselectionnotification): Posted when the selected range of characters changes.
- [didChangeTypingAttributesNotification](https://developer.apple.com/documentation/appkit/nstextview/didchangetypingattributesnotification): Posted when there is a change in the typing attributes within a text view.
- [willChangeNotifyingTextViewNotification](https://developer.apple.com/documentation/appkit/nstextview/willchangenotifyingtextviewnotification): Posted when a new text view is established as the text view that sends notifications.
- [didRemoveItemNotification](https://developer.apple.com/documentation/appkit/nstoolbar/didremoveitemnotification): Posted after an item is removed from a toolbar.
- [willAddItemNotification](https://developer.apple.com/documentation/appkit/nstoolbar/willadditemnotification): Posts before the toolbar adds a new item.
- [boundsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/boundsdidchangenotification): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [didUpdateTrackingAreasNotification](https://developer.apple.com/documentation/appkit/nsview/didupdatetrackingareasnotification): Posted whenever a view recalculates its tracking areas.
- [frameDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/framedidchangenotification): A notification that posts when the view’s frame rectangle changes to a new value.
- [didBecomeKeyNotification](https://developer.apple.com/documentation/appkit/nswindow/didbecomekeynotification): A notification that the window object became the key window.
- [didBecomeMainNotification](https://developer.apple.com/documentation/appkit/nswindow/didbecomemainnotification): A notification that the window object became the main window.
- [didChangeBackingPropertiesNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangebackingpropertiesnotification): A notification that the window object backing properties changed.
- [didChangeOcclusionStateNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangeocclusionstatenotification): A notification that the window object’s occlusion state changed.
- [didChangeScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangescreennotification): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [didChangeScreenProfileNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangescreenprofilenotification): A notification that the screen containing the window changed.
- [didDeminiaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/diddeminiaturizenotification): A notification that the window is no longer minimized.
- [didEndLiveResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didendliveresizenotification): A notification that the user resized the window object.
- [didEndSheetNotification](https://developer.apple.com/documentation/appkit/nswindow/didendsheetnotification): A notification that the window object closed an attached sheet.
- [didEnterFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didenterfullscreennotification): A notification that the window entered full-screen mode.
- [didEnterVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/didenterversionbrowsernotification): A notification that the window object entered version browser mode.
- [didExitFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didexitfullscreennotification): A notification that the window object exited full-screen mode.
- [didExitVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/didexitversionbrowsernotification): A notification that the window object exited version browser mode.
- [didExposeNotification](https://developer.apple.com/documentation/appkit/nswindow/didexposenotification): A notification that a window exposed a portion of its nonretained content.
- [didMiniaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didminiaturizenotification): A notification that the window object minimized.
- [didMoveNotification](https://developer.apple.com/documentation/appkit/nswindow/didmovenotification): A notification that the window object moved.
- [didResignKeyNotification](https://developer.apple.com/documentation/appkit/nswindow/didresignkeynotification): A notification that the window object resigned its status as key window.
- [didResignMainNotification](https://developer.apple.com/documentation/appkit/nswindow/didresignmainnotification): A notification that the window object resigned its status as main window.
- [didResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didresizenotification): A notification that the window object size changed.
- [didUpdateNotification](https://developer.apple.com/documentation/appkit/nswindow/didupdatenotification): A notification that the window object received an update message.
- [willBeginSheetNotification](https://developer.apple.com/documentation/appkit/nswindow/willbeginsheetnotification): A notification that the window object is about to open a sheet.
- [willCloseNotification](https://developer.apple.com/documentation/appkit/nswindow/willclosenotification): A notification that the window object is about to close.
- [willEnterFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/willenterfullscreennotification): A notification that the window will enter full-screen mode.
- [willEnterVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/willenterversionbrowsernotification): A notification that the window object will enter version browser mode.
- [willExitFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/willexitfullscreennotification): A notification that the window object will exit full-screen mode.
- [willExitVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/willexitversionbrowsernotification): A notification that the window object will exit version browser mode.
- [willMiniaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/willminiaturizenotification): A notification that the window object is about to minimize.
- [willMoveNotification](https://developer.apple.com/documentation/appkit/nswindow/willmovenotification): A notification that the window object is about to move.
- [willStartLiveResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/willstartliveresizenotification): A notification that the user is about to resize the window.
- [accessibilityDisplayOptionsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayoptionsdidchangenotification): A notification that the workspace posts when any of the accessibility display options change.
- [activeSpaceDidChangeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/activespacedidchangenotification): A notification that the workspace posts when a Spaces change occurs.
- [didActivateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didactivateapplicationnotification): A notification that the workspace posts when the Finder is about to activate an app.
- [didChangeFileLabelsNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didchangefilelabelsnotification): A notification that the workspace posts when the Finder file labels or colors change.
- [didDeactivateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/diddeactivateapplicationnotification): A notification that the workspace posts when the Finder deactivates an app.
- [didHideApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didhideapplicationnotification): A notification that the workspace posts when the Finder hides an app.
- [didLaunchApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didlaunchapplicationnotification): A notification that the workspace posts when a new app starts up.
- [didMountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didmountnotification): A notification that the workspace posts when a new device mounts.
- [didPerformFileOperationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didperformfileoperationnotification): Deprecated. Posted when a file operation has been performed in the receiving app.
- [didRenameVolumeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didrenamevolumenotification): A notification that the workspace posts when a volume changes its name or mount path.
- [didTerminateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didterminateapplicationnotification): A notification that the workspace posts when an app finishes executing.
- [didUnhideApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didunhideapplicationnotification): A notification that the workspace posts when the Finder unhides an app.
- [didUnmountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didunmountnotification): A notification that the workspace posts when the Finder unmounts a device.
- [didWakeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didwakenotification): A notification that the workspace posts when the device wakes from sleep.
- [screensDidSleepNotification](https://developer.apple.com/documentation/appkit/nsworkspace/screensdidsleepnotification): A notification that the workspace posts when the device’s screen goes to sleep.
- [screensDidWakeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/screensdidwakenotification): A notification that the workspace posts when the device’s screens wake.
- [sessionDidBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsworkspace/sessiondidbecomeactivenotification): A notification that the workspace posts after a user session switches in.
- [sessionDidResignActiveNotification](https://developer.apple.com/documentation/appkit/nsworkspace/sessiondidresignactivenotification): A notification that the workspace posts before a user session switches out.
- [willLaunchApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willlaunchapplicationnotification): A notification that the workspace posts when the Finder is about to launch an app.
- [willPowerOffNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willpoweroffnotification): A notification that the workspace posts when the user requests a logout or powers off the device.
- [willSleepNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willsleepnotification): A notification that the workspace posts before the device goes to sleep.
- [willUnmountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willunmountnotification): A notification that the workspace posts when the Finder is about to unmount a device.
- [didChangeNotification](https://developer.apple.com/documentation/appkit/nscolorlist/didchangenotification): Posted whenever a color list changes.
- [didChangeNotification](https://developer.apple.com/documentation/appkit/nscolorlist/didchangenotification): Posted whenever a color list changes.
- [selectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nscombobox/selectiondidchangenotification): Posted after the pop-up list selection of the `NSComboBox` changes.
- [selectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nscombobox/selectionischangingnotification): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [willDismissNotification](https://developer.apple.com/documentation/appkit/nscombobox/willdismissnotification): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [willPopUpNotification](https://developer.apple.com/documentation/appkit/nscombobox/willpopupnotification): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.
- [contextHelpModeDidActivateNotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodedidactivatenotification): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.
- [contextHelpModeDidDeactivateNotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodediddeactivatenotification): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.
- [textDidBeginEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidbegineditingnotification): Sent when a control with editable cells begins an edit session.
- [textDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification): Sent when the text in the receiving control changes.
- [textDidEndEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidendeditingnotification): Sent when a control with editable cells ends an editing session.
- [currentControlTintDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolor/currentcontroltintdidchangenotification): Deprecated. Sent after the user changes control tint preference.
- [didCloseNotification](https://developer.apple.com/documentation/appkit/nsdrawer/didclosenotification): Deprecated. Posted whenever the drawer is closed.
- [didOpenNotification](https://developer.apple.com/documentation/appkit/nsdrawer/didopennotification): Deprecated. Posted whenever the drawer is opened.
- [willCloseNotification](https://developer.apple.com/documentation/appkit/nsdrawer/willclosenotification): Deprecated. Posted whenever the drawer is about to close.
- [willOpenNotification](https://developer.apple.com/documentation/appkit/nsdrawer/willopennotification): Deprecated. Posted whenever the drawer is about to open.
- [didChangeNotification](https://developer.apple.com/documentation/appkit/nsfontcollection/didchangenotification): Posted whenever a font collection is changed.
- [fontSetChangedNotification](https://developer.apple.com/documentation/appkit/nsfont/fontsetchangednotification): Posted after the currently-set font changes.
- [registryDidChangeNotification](https://developer.apple.com/documentation/appkit/nsimagerep/registrydidchangenotification): Posted whenever the image representation class registry changes.
- [didAddItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didadditemnotification): Posted after a menu item is added to the menu.
- [didBeginTrackingNotification](https://developer.apple.com/documentation/appkit/nsmenu/didbegintrackingnotification): Posted when menu tracking begins.
- [didChangeItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didchangeitemnotification): Posted after a menu item in the menu changes appearance.
- [didEndTrackingNotification](https://developer.apple.com/documentation/appkit/nsmenu/didendtrackingnotification): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didremoveitemnotification): Posted after a menu item is removed from the menu.
- [didSendActionNotification](https://developer.apple.com/documentation/appkit/nsmenu/didsendactionnotification): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](https://developer.apple.com/documentation/appkit/nsmenu/willsendactionnotification): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
- [columnDidMoveNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidmovenotification): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [columnDidResizeNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidresizenotification): Posted whenever a column is resized in an `NSOutlineView` object.
- [itemDidCollapseNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemdidcollapsenotification): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [itemDidExpandNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemdidexpandnotification): Posted whenever an item is expanded in an `NSOutlineView` object.
- [itemWillCollapseNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemwillcollapsenotification): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [itemWillExpandNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemwillexpandnotification): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [selectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/selectiondidchangenotification): Posted after the outline view’s selection changes.
- [selectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/selectionischangingnotification): Posted as the outline view’s selection changes (while the mouse button is still down).
- [willPopUpNotification](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/willpopupnotification): This notification is posted just before a pop-up menu is attached to its window frame.
- [willPopUpNotification](https://developer.apple.com/documentation/appkit/nspopupbutton/willpopupnotification): Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.
- [didCloseNotification](https://developer.apple.com/documentation/appkit/nspopover/didclosenotification): Sent after the popover has finished animating offscreen.
- [didShowNotification](https://developer.apple.com/documentation/appkit/nspopover/didshownotification): Sent after the popover has finished animating onscreen.
- [willCloseNotification](https://developer.apple.com/documentation/appkit/nspopover/willclosenotification): Sent before the popover is closed.
- [willShowNotification](https://developer.apple.com/documentation/appkit/nspopover/willshownotification): Sent before the popover is shown.
- [preferredScrollerStyleDidChangeNotification](https://developer.apple.com/documentation/appkit/nsscroller/preferredscrollerstyledidchangenotification): Posted if the preferred scroller style changes.
- [rowsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsruleeditor/rowsdidchangenotification): This notification is posted to the default notification center whenever the view’s rows change.
- [colorSpaceDidChangeNotification](https://developer.apple.com/documentation/appkit/nsscreen/colorspacedidchangenotification): Posted when the color space of the screen has changed.
- [didEndLiveMagnifyNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didendlivemagnifynotification): Posted at the end of a magnify gesture.
- [didEndLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didendlivescrollnotification): Posted on the main thread at the end of live scroll tracking.
- [didLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didlivescrollnotification): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [willStartLiveMagnifyNotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivemagnifynotification): Posted at the beginning of a magnify gesture.
- [willStartLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivescrollnotification): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [didChangeAutomaticCapitalizationNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticcapitalizationnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticCapitalizationMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticcapitalizationmessage).
- [didChangeAutomaticDashSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticdashsubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticdashsubstitutionmessage).
- [didChangeAutomaticPeriodSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticperiodsubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticperiodsubstitutionmessage).
- [didChangeAutomaticQuoteSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticquotesubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticquotesubstitutionmessage).
- [didChangeAutomaticSpellingCorrectionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticspellingcorrectionnotification): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [didChangeAutomaticTextReplacementNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextreplacementnotification): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.
- [didResizeSubviewsNotification](https://developer.apple.com/documentation/appkit/nssplitview/didresizesubviewsnotification): A notification that posts after a change to the size of some or all subviews of a split view.
- [willResizeSubviewsNotification](https://developer.apple.com/documentation/appkit/nssplitview/willresizesubviewsnotification): A notification that posts before a change to the size of some or all subviews of a split view.
- [systemColorsDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolor/systemcolorsdidchangenotification): Sent when the system colors have changed, such as through a system control panel interface.
- [columnDidMoveNotification](https://developer.apple.com/documentation/appkit/nstableview/columndidmovenotification): Posted whenever a column is moved by user action in an `NSTableView` object.
- [columnDidResizeNotification](https://developer.apple.com/documentation/appkit/nstableview/columndidresizenotification): Posted whenever a column is resized in an `NSTableView` object.
- [selectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nstableview/selectiondidchangenotification): Posted after an `NSTableView` object’s selection changes.
- [selectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nstableview/selectionischangingnotification): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).
- [selectedAlternativeStringNotification](https://developer.apple.com/documentation/appkit/nstextalternatives/selectedalternativestringnotification): Posted when the user selects an alternate string.
- [didBeginEditingNotification](https://developer.apple.com/documentation/appkit/nstext/didbegineditingnotification): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [didChangeNotification](https://developer.apple.com/documentation/appkit/nstext/didchangenotification): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [didEndEditingNotification](https://developer.apple.com/documentation/appkit/nstext/didendeditingnotification): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [keyboardSelectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nstextinputcontext/keyboardselectiondidchangenotification): Posted after the selected text input source changes.
- [didChangeAutomaticTextCompletionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextcompletionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextCompletionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextcompletionmessage).
- [didBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/didbecomeactivenotification): Posted immediately after the app becomes active.
- [didChangeOcclusionStateNotification](https://developer.apple.com/documentation/appkit/nsapplication/didchangeocclusionstatenotification): Posted when the app’s occlusion state changes.
- [didChangeScreenParametersNotification](https://developer.apple.com/documentation/appkit/nsapplication/didchangescreenparametersnotification): Posted when the configuration of the displays attached to the computer is changed.
- [didFinishLaunchingNotification](https://developer.apple.com/documentation/appkit/nsapplication/didfinishlaunchingnotification): Posted at the end of the [finishLaunching()](https://developer.apple.com/documentation/appkit/nsapplication/finishlaunching%28%29) method to indicate that the app has completed launching and is ready to run.
- [didFinishRestoringWindowsNotification](https://developer.apple.com/documentation/appkit/nsapplication/didfinishrestoringwindowsnotification): Posted when the app has finished restoring windows.
- [didHideNotification](https://developer.apple.com/documentation/appkit/nsapplication/didhidenotification): Posted at the end of the [hide(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/hide%28_:%29) method to indicate that the app is now hidden.
- [didResignActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/didresignactivenotification): Posted immediately after the app gives up its active status to another app.
- [didUnhideNotification](https://developer.apple.com/documentation/appkit/nsapplication/didunhidenotification): Posted at the end of the [unhideWithoutActivation()](https://developer.apple.com/documentation/appkit/nsapplication/unhidewithoutactivation%28%29) method to indicate that the app is now visible.
- [didUpdateNotification](https://developer.apple.com/documentation/appkit/nsapplication/didupdatenotification): Posted at the end of the [updateWindows()](https://developer.apple.com/documentation/appkit/nsapplication/updatewindows%28%29) method to indicate that the app has finished updating its windows.
- [willBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/willbecomeactivenotification): Posted immediately before the app becomes active.
- [willFinishLaunchingNotification](https://developer.apple.com/documentation/appkit/nsapplication/willfinishlaunchingnotification): Posted at the start of the [finishLaunching()](https://developer.apple.com/documentation/appkit/nsapplication/finishlaunching%28%29) method to indicate that the app has completed its initialization process and is about to finish launching.
- [willHideNotification](https://developer.apple.com/documentation/appkit/nsapplication/willhidenotification): Posted at the start of the [hide(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/hide%28_:%29) method to indicate that the app is about to be hidden.
- [willResignActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/willresignactivenotification): Posted immediately before the app gives up its active status to another app.
- [willTerminateNotification](https://developer.apple.com/documentation/appkit/nsapplication/willterminatenotification): Sends a notification to terminate the app.
- [willUnhideNotification](https://developer.apple.com/documentation/appkit/nsapplication/willunhidenotification): Posted at the start of the [unhideWithoutActivation()](https://developer.apple.com/documentation/appkit/nsapplication/unhidewithoutactivation%28%29) method to indicate that the app is about to become visible.
- [willUpdateNotification](https://developer.apple.com/documentation/appkit/nsapplication/willupdatenotification): Posted at the start of the [updateWindows()](https://developer.apple.com/documentation/appkit/nsapplication/updatewindows%28%29) method to indicate that the app is about to update its windows.
- [columnConfigurationDidChangeNotification](https://developer.apple.com/documentation/appkit/nsbrowser/columnconfigurationdidchangenotification): Notifies the delegate when the width of a browser column has changed.
- [NSClassDescriptionNeededForClass](name-swift.struct/nsclassdescriptionneededforclass.md): Posted by [init(for:)](../nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.
- [NSApplicationProtectedDataDidBecomeAvailable](name-swift.struct/nsapplicationprotecteddatadidbecomeavailable.md)
- [NSApplicationProtectedDataWillBecomeUnavailable](name-swift.struct/nsapplicationprotecteddatawillbecomeunavailable.md)
- [announcementRequested](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/announcementrequested): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
- [applicationActivated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationactivated): This notification is posted after the app has been activated. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [applicationDeactivated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationdeactivated): This notification is posted after the app has been deactivated. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [applicationHidden](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationhidden): This notification is posted after the app is hidden. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [applicationShown](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationshown): This notification is posted after the app is shown. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [created](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/created): This notification is posted after an accessibility element is created. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [drawerCreated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/drawercreated): This notification is posted after a drawer appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [focusedUIElementChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/focuseduielementchanged): This notification is posted after an accessibility element gains focus. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [focusedWindowChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/focusedwindowchanged): This notification is posted after the key window changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [helpTagCreated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/helptagcreated): This notification is posted after a help tag appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [layoutChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/layoutchanged): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [uiElements](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/uielements) and an array containing the UI elements that have been added or changed. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [mainWindowChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/mainwindowchanged): This notification is posted after the main window changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [moved](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/moved): This notification is posted after an accessibility element moves. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [resized](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/resized): This notification is posted after an accessibility element’s size changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [rowCollapsed](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowcollapsed): This notification is posted after a row collapses. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [rowCountChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowcountchanged): This notification is posted after a row is added or deleted. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [rowExpanded](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowexpanded): This notification is posted after a row expands. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedCellsChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedcellschanged): This notification is posted after one or more cells in a cell-based table are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedChildrenChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedchildrenchanged): This notification is posted after one or more child elements are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedChildrenMoved](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedchildrenmoved): This notification is posted after the selected items in a layout area move. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedColumnsChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedcolumnschanged): This notification is posted after one or more columns are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedRowsChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedrowschanged): This notification is posted after one or more rows are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [selectedTextChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedtextchanged): This notification is posted after text is selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [sheetCreated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/sheetcreated): This notification is posted after a sheet appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [titleChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/titlechanged): This notification is posted after an accessibility element’s title changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [uiElementDestroyed](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/uielementdestroyed): This notification is posted after an accessibility element is destroyed. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [unitsChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/unitschanged): This notification is posted after the units in a layout area change. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [valueChanged](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/valuechanged): This notification is posted after an accessibility element’s value changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [windowCreated](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowcreated): This notification is posted after a new window appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [windowDeminiaturized](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowdeminiaturized): This notification is posted after a window is restored to full size from the Dock. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [windowMiniaturized](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowminiaturized): This notification is posted after a window is put in the Dock. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [windowMoved](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowmoved): This notification is posted after a window moves. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [windowResized](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowresized): This notification is posted after a window’s size changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [progressMarkNotification](https://developer.apple.com/documentation/appkit/nsanimation/progressmarknotification): Posted when the current progress of a running animation reaches one of its progress marks.
- [antialiasThresholdChangedNotification](https://developer.apple.com/documentation/appkit/nsfont/antialiasthresholdchangednotification): Posted after the threshold for antialiasing changes.
- [globalFrameDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/globalframedidchangenotification): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.

### AVFAudio

- [AVAudioEngineConfigurationChange](name-swift.struct/avaudioengineconfigurationchange.md): A notification the framework posts when the audio engine configuration changes.
- [AVAudioUnitComponentTagsDidChange](name-swift.struct/avaudiounitcomponenttagsdidchange.md): A notification that indicates when component tags change.
- [interruptionNotification](../../avfaudio/avaudiosession/interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
- [mediaServicesWereLostNotification](../../avfaudio/avaudiosession/mediaserviceswerelostnotification.md): A notification the system posts when it terminates the media server.
- [mediaServicesWereResetNotification](../../avfaudio/avaudiosession/mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
- [routeChangeNotification](../../avfaudio/avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.
- [silenceSecondaryAudioHintNotification](../../avfaudio/avaudiosession/silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.

### AVFoundation

- [AVAssetChapterMetadataGroupsDidChange](name-swift.struct/avassetchaptermetadatagroupsdidchange.md): A notification the system posts when an asset’s chapter metadata groups change.
- [AVAssetContainsFragmentsDidChange](name-swift.struct/avassetcontainsfragmentsdidchange.md): A notification the system posts when an asset’s fragments change.
- [AVAssetDurationDidChange](name-swift.struct/avassetdurationdidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset’s duration.
- [AVAssetMediaSelectionGroupsDidChange](name-swift.struct/avassetmediaselectiongroupsdidchange.md): A notification the system posts when an asset’s media selection groups change.
- [AVAssetTrackSegmentsDidChange](name-swift.struct/avassettracksegmentsdidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset track’s segments.
- [AVAssetTrackTimeRangeDidChange](name-swift.struct/avassettracktimerangedidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset track’s time range.
- [AVAssetTrackTrackAssociationsDidChange](name-swift.struct/avassettracktrackassociationsdidchange.md): A notification the system posts when the track associations for an asset track change.
- [AVAssetWasDefragmented](name-swift.struct/avassetwasdefragmented.md): A notification the system posts when a fragmented asset minder observes that the system defragments the asset on disk.
- [subjectAreaDidChangeNotification](../../avfoundation/avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [wasConnectedNotification](../../avfoundation/avcapturedevice/wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](../../avfoundation/avcapturedevice/wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [formatDescriptionDidChangeNotification](../../avfoundation/avcaptureinput/port/formatdescriptiondidchangenotification.md): A notification the system posts when the capture input port’s format description changes.
- [didStartRunningNotification](../../avfoundation/avcapturesession/didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](../../avfoundation/avcapturesession/didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [interruptionEndedNotification](../../avfoundation/avcapturesession/interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](../../avfoundation/avcapturesession/runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
- [wasInterruptedNotification](../../avfoundation/avcapturesession/wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVFragmentedMovieContainsMovieFragmentsDidChange](name-swift.struct/avfragmentedmoviecontainsmoviefragmentsdidchange.md): A notification the system posts when a fragmented movie minder observes a change to a movie’s fragments.
- [AVFragmentedMovieDurationDidChange](name-swift.struct/avfragmentedmoviedurationdidchange.md): A notification the system posts when a fragmented movie minder observes a change to a movie’s duration.
- [AVFragmentedMovieTrackSegmentsDidChange](name-swift.struct/avfragmentedmovietracksegmentsdidchange.md): A notification the system posts when a fragmented movie minder observes a change to a fragmented movie track’s segments.
- [AVFragmentedMovieTrackTimeRangeDidChange](name-swift.struct/avfragmentedmovietracktimerangedidchange.md): A notification the system posts when a fragmented movie minder observes a change to a movie track’s time range.
- [AVFragmentedMovieWasDefragmented](name-swift.struct/avfragmentedmoviewasdefragmented.md): A notification the system posts when a fragmented movie minder observes that the system defragments the asset on disk.
- [AVPlayerAvailableHDRModesDidChange](name-swift.struct/avplayeravailablehdrmodesdidchange.md): Deprecated. A notification the system posts when a player’s available HDR modes change.
- [assetListResponseStatusDidChangeNotification](../../avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.
- [didPlayToEndTimeNotification](../../avfoundation/avplayeritem/didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [failedToPlayToEndTimeNotification](../../avfoundation/avplayeritem/failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [newAccessLogEntryNotification](../../avfoundation/avplayeritem/newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [newErrorLogEntryNotification](../../avfoundation/avplayeritem/newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.
- [playbackStalledNotification](../../avfoundation/avplayeritem/playbackstallednotification.md): A notification the system posts when a player item media doesn’t arrive in time to continue playback.
- [AVRouteDetectorMultipleRoutesDetectedDidChange](name-swift.struct/avroutedetectormultipleroutesdetecteddidchange.md): A notification the system posts when changes occur to its detected routes.
- [AVSampleBufferAudioRendererOutputConfigurationDidChange](name-swift.struct/avsamplebufferaudiorendereroutputconfigurationdidchange.md): Deprecated. A notification the system posts to indicate that the hardware configuration doesn’t match the enqueued data format.
- [AVSampleBufferAudioRendererWasFlushedAutomatically](name-swift.struct/avsamplebufferaudiorendererwasflushedautomatically.md): Deprecated. A notification the system posts when a renderer flushes its enqueued media data without an explicit request to do so.
- [AVSampleBufferDisplayLayerFailedToDecode](name-swift.struct/avsamplebufferdisplaylayerfailedtodecode.md): A notification the system posts when a sample buffer display layer fails to decode.
- [AVSampleBufferDisplayLayerOutputObscuredDueToInsufficientExternalProtectionDidChange](name-swift.struct/avsamplebufferdisplaylayeroutputobscuredduetoinsufficientexternalprotectiondidchange.md): A notification the system posts when the current device configuration doesn’t support the external content protection mechanism.
- [AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChange](name-swift.struct/avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchange.md): A notification the system posts when a sample buffer display layer changes its decoding requirements.
- [timeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [AVFragmentedMovieTrackTotalSampleDataLengthDidChange](name-swift.struct/avfragmentedmovietracktotalsampledatalengthdidchange.md): Deprecated. A notification the system posts when the sample data length of a fragmented movie track changes.
- [AVPlayerItemTimeJumped](name-swift.struct/avplayeritemtimejumped.md): Deprecated. A notification the system posts to indicate a jump in a player item’s current time.
- [timeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.

### AVKit

- [AVDisplayManagerModeSwitchSettingsChanged](name-swift.struct/avdisplaymanagermodeswitchsettingschanged.md): A notification the display manager posts when a user changes their Match Content settings in the tvOS Settings app.
- [AVDisplayManagerModeSwitchStart](name-swift.struct/avdisplaymanagermodeswitchstart.md): A notification the display manager posts when a display begins a mode switch.
- [AVDisplayManagerModeSwitchEnd](name-swift.struct/avdisplaymanagermodeswitchend.md): A notification the display manager posts when a display ends a mode switch.

### ClockKit

- [CLKComplicationServerActiveComplicationsDidChange](name-swift.struct/clkcomplicationserveractivecomplicationsdidchange.md): Deprecated. Posted when the set of active complications changes.

### CloudKit

- [CKAccountChanged](name-swift.struct/ckaccountchanged.md): A notification that a container posts when the status of an iCloud account changes.

### Contacts

- [CNContactStoreDidChange](name-swift.struct/cncontactstoredidchange.md): Posted when changes occur to the contact store.

### Core Data

- [NSManagedObjectContextDidSave](name-swift.struct/nsmanagedobjectcontextdidsave.md): A notification that posts after a context finishes writing unsaved changes.
- [NSManagedObjectContextObjectsDidChange](name-swift.struct/nsmanagedobjectcontextobjectsdidchange.md): A notification that posts when there are changes to context’s registered managed objects.
- [NSManagedObjectContextWillSave](name-swift.struct/nsmanagedobjectcontextwillsave.md): A notification that posts before a context writes unsaved changes.
- [NSPersistentStoreCoordinatorStoresDidChange](name-swift.struct/nspersistentstorecoordinatorstoresdidchange.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorStoresWillChange](name-swift.struct/nspersistentstorecoordinatorstoreswillchange.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorWillRemoveStore](name-swift.struct/nspersistentstorecoordinatorwillremovestore.md): A notification that posts before a coordinator removes a store.
- [NSCoreDataCoreSpotlightDelegateIndexDidUpdate](name-swift.struct/nscoredatacorespotlightdelegateindexdidupdate.md): A notification that posts after Spotlight completes an index update.
- [NSManagedObjectContextDidMergeChangesObjectIDs](name-swift.struct/nsmanagedobjectcontextdidmergechangesobjectids.md): A notification that posts after a context merges changes from a different notification.
- [NSManagedObjectContextDidSaveObjectIDs](name-swift.struct/nsmanagedobjectcontextdidsaveobjectids.md): A notification that posts after a context finishes writing changes.
- [NSPersistentStoreRemoteChange](name-swift.struct/nspersistentstoreremotechange.md): A notification that posts after another process writes to a persistent store.
- [NSPersistentStoreDidImportUbiquitousContentChanges](name-swift.struct/nspersistentstoredidimportubiquitouscontentchanges.md): Deprecated. Posted after records are imported from the ubiquitous content store.

### Core Telephony

- [CTServiceRadioAccessTechnologyDidChange](name-swift.struct/ctserviceradioaccesstechnologydidchange.md): A notification that posts when radio access technology changes.
- [CTRadioAccessTechnologyDidChange](name-swift.struct/ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

### Core WLAN

- [CWBSSIDDidChange](name-swift.struct/cwbssiddidchange.md): Deprecated.
- [CWCountryCodeDidChange](name-swift.struct/cwcountrycodedidchange.md): Deprecated.
- [CWLinkDidChange](name-swift.struct/cwlinkdidchange.md): Deprecated.
- [CWLinkQualityDidChange](name-swift.struct/cwlinkqualitydidchange.md): Deprecated.
- [CWModeDidChange](name-swift.struct/cwmodedidchange.md): Deprecated.
- [CWPowerDidChange](name-swift.struct/cwpowerdidchange.md): Deprecated.
- [CWSSIDDidChange](name-swift.struct/cwssiddidchange.md): Deprecated.
- [CWScanCacheDidUpdate](name-swift.struct/cwscancachedidupdate.md): Deprecated.

### EventKit

- [EKEventStoreChanged](name-swift.struct/ekeventstorechanged.md): A notification posted when changes are made to the Calendar database.

### External Accessory

- [EAAccessoryDidConnect](name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.

### File Provider

- [fileProviderDomainDidChange](name-swift.struct/fileproviderdomaindidchange.md)
- [fileProviderMaterializedSetDidChange](name-swift.struct/fileprovidermaterializedsetdidchange.md)
- [fileProviderPendingSetDidChange](name-swift.struct/fileproviderpendingsetdidchange.md)

### Foundation

- [NSUbiquityIdentityDidChange](name-swift.struct/nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.
- [NSAppleEventManagerWillProcessFirstEvent](name-swift.struct/nsappleeventmanagerwillprocessfirstevent.md): Posted by `NSAppleEventManager` before it first dispatches an Apple event. Your application can use this notification to avoid registering any Apple event handlers until the first time at which they may be needed.
- [NSUndoManagerCheckpoint](name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidCloseUndoGroup](name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerDidOpenUndoGroup](name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerDidRedoChange](name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidUndoChange](name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillCloseUndoGroup](name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerWillRedoChange](name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerWillUndoChange](name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSWillBecomeMultiThreaded](name-swift.struct/nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector(\_:toTarget:with:)](../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start()](../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.
- [NSBundleResourceRequestLowDiskSpace](name-swift.struct/nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.
- [NSCalendarDayChanged](name-swift.struct/nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.
- [NSDidBecomeSingleThreaded](name-swift.struct/nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSExtensionHostDidBecomeActive](name-swift.struct/nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackground](name-swift.struct/nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForeground](name-swift.struct/nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.
- [NSExtensionHostWillResignActive](name-swift.struct/nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSFileHandleConnectionAccepted](name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailable](name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletion](name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.
- [NSHTTPCookieManagerAcceptPolicyChanged](name-swift.struct/nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.
- [NSHTTPCookieManagerCookiesChanged](name-swift.struct/nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
- [NSMetadataQueryDidFinishGathering](name-swift.struct/nsmetadataquerydidfinishgathering.md): Posted when the receiver has finished with the initial result-gathering phase of the query.
- [NSMetadataQueryDidStartGathering](name-swift.struct/nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryDidUpdate](name-swift.struct/nsmetadataquerydidupdate.md): Posted when the receiver’s results have changed during the live-update phase of the query.
- [NSMetadataQueryGatheringProgress](name-swift.struct/nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.
- [NSProcessInfoPowerStateDidChange](name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.
- [NSSystemClockDidChange](name-swift.struct/nssystemclockdidchange.md): A notification posted whenever the system clock is changed.
- [NSSystemTimeZoneDidChange](name-swift.struct/nssystemtimezonedidchange.md): A notification posted when the time zone changes.
- [NSThreadWillExit](name-swift.struct/nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit()](../thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSURLCredentialStorageChanged](name-swift.struct/nsurlcredentialstoragechanged.md): Deprecated. A notification posted when the set of stored credentials changes.

### Game Controller

- [GCControllerDidConnect](name-swift.struct/gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](name-swift.struct/gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.
- [GCControllerDidBecomeCurrent](name-swift.struct/gccontrollerdidbecomecurrent.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrent](name-swift.struct/gccontrollerdidstopbeingcurrent.md): A notification that posts when a controller stops being the current controller.
- [GCControllerUserCustomizationsDidChange](name-swift.struct/gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
- [GCKeyboardDidConnect](name-swift.struct/gckeyboarddidconnect.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnect](name-swift.struct/gckeyboarddiddisconnect.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.
- [GCMouseDidBecomeCurrent](name-swift.struct/gcmousedidbecomecurrent.md): A notification that posts when a mouse becomes the most recent mouse that the user connects.
- [GCMouseDidConnect](name-swift.struct/gcmousedidconnect.md): A notification that posts after a mouse connects to the device.
- [GCMouseDidDisconnect](name-swift.struct/gcmousediddisconnect.md): A notification that posts after a mouse disconnects from the device.
- [GCMouseDidStopBeingCurrent](name-swift.struct/gcmousedidstopbeingcurrent.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.
- [GCRacingWheelDidConnect](name-swift.struct/gcracingwheeldidconnect.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnect](name-swift.struct/gcracingwheeldiddisconnect.md): A notification that posts after a racing wheel controller disconnects from the device.

### GameKit

- [GKPlayerAuthenticationDidChangeNotificationName](name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.
- [GKPlayerDidChangeNotificationName](name-swift.struct/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

### HealthKit

- [HKUserPreferencesDidChange](name-swift.struct/hkuserpreferencesdidchange.md): Notifies observers whenever the user changes his or her preferred units.

### HomeKit

- [HMCharacteristicPropertySupportsEventNotification](../../homekit/hmcharacteristicpropertysupportseventnotification-2f0ml.md): The characteristic supports event notifications.

### IOBluetooth

- [IOBluetoothHostControllerPoweredOff](name-swift.struct/iobluetoothhostcontrollerpoweredoff.md)
- [IOBluetoothHostControllerPoweredOn](name-swift.struct/iobluetoothhostcontrollerpoweredon.md)
- [IOBluetoothL2CAPChannelPublished](name-swift.struct/iobluetoothl2capchannelpublished.md)
- [IOBluetoothL2CAPChannelTerminated](name-swift.struct/iobluetoothl2capchannelterminated.md)

### iTunes Library

- [ITLibraryDidChange](name-swift.struct/itlibrarydidchange.md): A notification the system posts when a library change occurs.

### MapKit

- [MKAnnotationCalloutInfoDidChange](name-swift.struct/mkannotationcalloutinfodidchange.md): Deprecated. A property to observe to determine when the title or subtitle information of an annotation object changes.

### MediaPlayer

- [MPMusicPlayerControllerQueueDidChange](name-swift.struct/mpmusicplayercontrollerqueuedidchange.md): Indicates the music player’s queue changed.
- [MPMediaLibraryDidChange](name-swift.struct/mpmedialibrarydidchange.md): Indicates the media library has changed.
- [MPMediaPlaybackIsPreparedToPlayDidChange](name-swift.struct/mpmediaplaybackispreparedtoplaydidchange.md): Deprecated. Indicates that the prepared to play status of the media player has changed.
- [MPMusicPlayerControllerNowPlayingItemDidChange](name-swift.struct/mpmusicplayercontrollernowplayingitemdidchange.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerPlaybackStateDidChange](name-swift.struct/mpmusicplayercontrollerplaybackstatedidchange.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerVolumeDidChange](name-swift.struct/mpmusicplayercontrollervolumedidchange.md): Posted when the audio playback volume for the music player has changed.
- [MPMovieDurationAvailable](name-swift.struct/mpmoviedurationavailable.md): Deprecated. Posted when the duration of a movie has been determined. There is no `userInfo` dictionary.
- [MPMovieMediaTypesAvailable](name-swift.struct/mpmoviemediatypesavailable.md): Deprecated. Posted when the available media types in a movie are determined. There is no `userInfo` dictionary.
- [MPMovieNaturalSizeAvailable](name-swift.struct/mpmovienaturalsizeavailable.md): Deprecated. Posted when the natural frame size of a movie is first determined or subsequently changes. There is no `userInfo` dictionary.
- [MPMoviePlayerDidEnterFullscreen](name-swift.struct/mpmovieplayerdidenterfullscreen.md): Deprecated. Posted when a movie player has entered full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerDidExitFullscreen](name-swift.struct/mpmovieplayerdidexitfullscreen.md): Deprecated. Posted when a movie player has exited full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerIsAirPlayVideoActiveDidChange](name-swift.struct/mpmovieplayerisairplayvideoactivedidchange.md): Deprecated. Posted when a movie player has started or ended playing a movie via AirPlay. There is no `userInfo` dictionary.
- [MPMoviePlayerLoadStateDidChange](name-swift.struct/mpmovieplayerloadstatedidchange.md): Deprecated. Posted when a movie player’s network buffering state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerNowPlayingMovieDidChange](name-swift.struct/mpmovieplayernowplayingmoviedidchange.md): Deprecated. Posted when the currently playing movie has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerPlaybackDidFinish](name-swift.struct/mpmovieplayerplaybackdidfinish.md): Deprecated. Posted when a movie has finished playing.
- [MPMoviePlayerPlaybackStateDidChange](name-swift.struct/mpmovieplayerplaybackstatedidchange.md): Deprecated. Posted when a movie player’s playback state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerReadyForDisplayDidChange](name-swift.struct/mpmovieplayerreadyfordisplaydidchange.md): Deprecated. Posted when the ready for display state changes.
- [MPMoviePlayerScalingModeDidChange](name-swift.struct/mpmovieplayerscalingmodedidchange.md): Deprecated. Posted when the scaling mode of a movie player has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerThumbnailImageRequestDidFinish](name-swift.struct/mpmovieplayerthumbnailimagerequestdidfinish.md): Deprecated. Posted when a request to capture a thumbnail from a movie has finished whether the request succeeded or failed. Upon successful capture of a thumbnail, the `userInfo` dictionary contains values for the following keys:
- [MPMoviePlayerTimedMetadataUpdated](name-swift.struct/mpmovieplayertimedmetadataupdated.md): Deprecated. Posted when new timed metadata arrives.
- [MPMoviePlayerWillEnterFullscreen](name-swift.struct/mpmovieplayerwillenterfullscreen.md): Deprecated. Posted when a movie player is about to enter full-screen mode.
- [MPMoviePlayerWillExitFullscreen](name-swift.struct/mpmovieplayerwillexitfullscreen.md): Deprecated. Posted when a movie player is about to exit full-screen mode.
- [MPMovieSourceTypeAvailable](name-swift.struct/mpmoviesourcetypeavailable.md): Deprecated. Posted when the source type of a movie was previously unknown and is newly available. There is no `userInfo` dictionary.
- [MPVolumeViewWirelessRouteActiveDidChange](name-swift.struct/mpvolumeviewwirelessrouteactivedidchange.md): Deprecated. Indicates the active wireless route changed.
- [MPVolumeViewWirelessRoutesAvailableDidChange](name-swift.struct/mpvolumeviewwirelessroutesavailabledidchange.md): Deprecated. Indicates the available wireless routes changed.

### MessageUI

- [MFMessageComposeViewControllerTextMessageAvailabilityDidChange](name-swift.struct/mfmessagecomposeviewcontrollertextmessageavailabilitydidchange.md): Posted when the current device’s ability to send text messages changes.
- [MFMessageComposeViewControllerTextMessageAvailabilityDidChange](name-swift.struct/mfmessagecomposeviewcontrollertextmessageavailabilitydidchange.md): Posted when the current device’s ability to send text messages changes.

### NetworkExtension

- [NEFilterConfigurationDidChange](name-swift.struct/nefilterconfigurationdidchange.md): Posted after the filter configuration stored in the Network Extension preferences changes.
- [NEVPNConfigurationChange](name-swift.struct/nevpnconfigurationchange.md): Posted after the VPN configuration stored in the Network Extension preferences changes.
- [NEVPNStatusDidChange](name-swift.struct/nevpnstatusdidchange.md): Posted when the status of the VPN connection changes.
- [NEDNSProxyConfigurationDidChange](name-swift.struct/nednsproxyconfigurationdidchange.md): A notification that is posted when the DNS proxy configuration changes.
- [NEDNSSettingsConfigurationDidChange](name-swift.struct/nednssettingsconfigurationdidchange.md)

### PassKit

- [PKPassLibraryDidChange](../../passkit/pkpasslibrarynotificationname/pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.
- [PKPassLibraryRemotePaymentPassesDidChange](../../passkit/pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.

### PDFKit

- [PDFDocumentDidBeginFind](name-swift.struct/pdfdocumentdidbeginfind.md): A notification that the document began a find operation.
- [PDFDocumentDidBeginPageFind](name-swift.struct/pdfdocumentdidbeginpagefind.md): A notification that a find operation begins working on a new page of a document.
- [PDFDocumentDidBeginPageWrite](name-swift.struct/pdfdocumentdidbeginpagewrite.md): A notification that a write operation begins working on a page in a document.
- [PDFDocumentDidBeginWrite](name-swift.struct/pdfdocumentdidbeginwrite.md): A notification that a write operation begins working on a document.
- [PDFDocumentDidEndFind](name-swift.struct/pdfdocumentdidendfind.md): A notification that the document finished a find operation.
- [PDFDocumentDidEndPageFind](name-swift.struct/pdfdocumentdidendpagefind.md): A notification that a find operation finishes working on a page in a document.
- [PDFDocumentDidEndPageWrite](name-swift.struct/pdfdocumentdidendpagewrite.md): A notification that a write operation finishes working on a page in a document.
- [PDFDocumentDidEndWrite](name-swift.struct/pdfdocumentdidendwrite.md): A notification that a write operation finishes working on a document.
- [PDFDocumentDidFindMatch](name-swift.struct/pdfdocumentdidfindmatch.md): A notification that a string match is found in a document.
- [PDFDocumentDidUnlock](name-swift.struct/pdfdocumentdidunlock.md): A notification that a document unlocked.
- [PDFThumbnailViewDocumentEdited](name-swift.struct/pdfthumbnailviewdocumentedited.md)
- [PDFViewAnnotationHit](name-swift.struct/pdfviewannotationhit.md): A notification posted when the user clicks on an annotation.
- [PDFViewAnnotationWillHit](name-swift.struct/pdfviewannotationwillhit.md): A notification posted before the user clicks an annotation.
- [PDFViewChangedHistory](name-swift.struct/pdfviewchangedhistory.md): A notification posted when the page history changes.
- [PDFViewCopyPermission](name-swift.struct/pdfviewcopypermission.md): A notification posted when the user attempts to copy to the pasteboard without the appropriate permissions.
- [PDFViewDisplayBoxChanged](name-swift.struct/pdfviewdisplayboxchanged.md): A notification posted when the display box has changed.
- [PDFViewDisplayModeChanged](name-swift.struct/pdfviewdisplaymodechanged.md): A notification posted when the display mode has changed.
- [PDFViewDocumentChanged](name-swift.struct/pdfviewdocumentchanged.md): A notification posted when a new document is associated with the view.
- [PDFViewPageChanged](name-swift.struct/pdfviewpagechanged.md): A notification posted when a new page becomes the current page.
- [PDFViewPrintPermission](name-swift.struct/pdfviewprintpermission.md): A notification posted when the user attempts to print without the appropriate permissions.
- [PDFViewScaleChanged](name-swift.struct/pdfviewscalechanged.md): A notification posted when the scale factor changes.
- [PDFViewSelectionChanged](name-swift.struct/pdfviewselectionchanged.md): A notification posted when the current selection has changed.
- [PDFViewVisiblePagesChanged](name-swift.struct/pdfviewvisiblepageschanged.md): A notification posted when the visible pages have changed.

### PreferencePanes

- [NSPreferencePaneCancelUnselect](name-swift.struct/nspreferencepanecancelunselect.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneDoUnselect](name-swift.struct/nspreferencepanedounselect.md): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneSwitchToPane](name-swift.struct/nspreferencepaneswitchtopane.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenu](name-swift.struct/nspreferencepaneupdatehelpmenu.md): Notifies observers that your help menu content changed.
- [NSPreferencePrefPaneIsAvailable](name-swift.struct/nspreferenceprefpaneisavailable.md): Notifies observers that the system preferences app is available to display your preferences.

### Quartz

- [IKFilterBrowserFilterDoubleClick](name-swift.struct/ikfilterbrowserfilterdoubleclick.md): Posted when the user double-clicks a filter in the filter browser.
- [IKFilterBrowserFilterSelected](name-swift.struct/ikfilterbrowserfilterselected.md): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserWillPreviewFilter](name-swift.struct/ikfilterbrowserwillpreviewfilter.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [quartzFilterManagerDidAddFilter](name-swift.struct/quartzfiltermanagerdidaddfilter.md)
- [quartzFilterManagerDidModifyFilter](name-swift.struct/quartzfiltermanagerdidmodifyfilter.md)
- [quartzFilterManagerDidRemoveFilter](name-swift.struct/quartzfiltermanagerdidremovefilter.md)
- [quartzFilterManagerDidSelectFilter](name-swift.struct/quartzfiltermanagerdidselectfilter.md)
- [QCCompositionPickerPanelDidSelectComposition](name-swift.struct/qccompositionpickerpaneldidselectcomposition.md): Deprecated. Posted when the user chooses a composition.
- [QCCompositionPickerViewDidSelectComposition](name-swift.struct/qccompositionpickerviewdidselectcomposition.md): Deprecated. Posted when the user selects a composition in the picker view.
- [QCCompositionRepositoryDidUpdate](name-swift.struct/qccompositionrepositorydidupdate.md): Deprecated. Posted whenever the list of compositions in the composition repository is updated.
- [QCViewDidStartRendering](name-swift.struct/qcviewdidstartrendering.md): Deprecated. Posted when the view starts rendering.
- [QCViewDidStopRendering](name-swift.struct/qcviewdidstoprendering.md): Deprecated. Posted when the view stops rendering.

### StoreKit

- [SKCloudServiceCapabilitiesDidChange](name-swift.struct/skcloudservicecapabilitiesdidchange.md): Deprecated. A notification name for indicating a change in the capabilities associated with the Music library on the device.
- [SKStorefrontIdentifierDidChange](name-swift.struct/skstorefrontidentifierdidchange.md): Deprecated. A notification name for indicating a change in the storefront identifier associated with the device.
- [SKStorefrontCountryCodeDidChange](name-swift.struct/skstorefrontcountrycodedidchange.md): Deprecated. A notification name for indicating a change in the storefront country or region code associated with the device.

### TV Services

- [TVTopShelfItemsDidChange](name-swift.struct/tvtopshelfitemsdidchange.md): Deprecated. A notification to post when your app’s Top Shelf content has changed.

### UIKit

- [announcementDidFinishNotification](../../uikit/uiaccessibility/announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [elementFocusedNotification](../../uikit/uiaccessibility/elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [assistiveTouchStatusDidChangeNotification](../../uikit/uiaccessibility/assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [boldTextStatusDidChangeNotification](../../uikit/uiaccessibility/boldtextstatusdidchangenotification.md): A notification that UIKit posts when the system’s Bold Text setting changes.
- [closedCaptioningStatusDidChangeNotification](../../uikit/uiaccessibility/closedcaptioningstatusdidchangenotification.md): A notification that UIKit posts when the setting for Closed Captions + SDH changes.
- [darkerSystemColorsStatusDidChangeNotification](../../uikit/uiaccessibility/darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [grayscaleStatusDidChangeNotification](../../uikit/uiaccessibility/grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.
- [guidedAccessStatusDidChangeNotification](../../uikit/uiaccessibility/guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [hearingDevicePairedEarDidChangeNotification](../../uikit/uiaccessibility/hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.
- [invertColorsStatusDidChangeNotification](../../uikit/uiaccessibility/invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.
- [monoAudioStatusDidChangeNotification](../../uikit/uiaccessibility/monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [reduceMotionStatusDidChangeNotification](../../uikit/uiaccessibility/reducemotionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Motion setting changes.
- [reduceTransparencyStatusDidChangeNotification](../../uikit/uiaccessibility/reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [shakeToUndoDidChangeNotification](../../uikit/uiaccessibility/shaketoundodidchangenotification.md): A notification that UIKit posts when the system’s Shake to Undo setting changes.
- [speakScreenStatusDidChangeNotification](../../uikit/uiaccessibility/speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [speakSelectionStatusDidChangeNotification](../../uikit/uiaccessibility/speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [switchControlStatusDidChangeNotification](../../uikit/uiaccessibility/switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [didBecomeActiveNotification](../../uikit/uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](../../uikit/uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [didFinishLaunchingNotification](../../uikit/uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.
- [didReceiveMemoryWarningNotification](../../uikit/uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [significantTimeChangeNotification](../../uikit/uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
- [userDidTakeScreenshotNotification](../../uikit/uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.
- [willEnterForegroundNotification](../../uikit/uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](../../uikit/uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](../../uikit/uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
- [didChangeNotification](../../uikit/uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [proximityStateDidChangeNotification](../../uikit/uidevice/proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.
- [brightnessDidChangeNotification](../../uikit/uiscreen/brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [didConnectNotification](../../uikit/uiscreen/didconnectnotification.md): Deprecated. A notification the system posts when a new screen connects to the device.
- [didDisconnectNotification](../../uikit/uiscreen/diddisconnectnotification.md): Deprecated. A notification the system posts when a screen disconnects from the device.
- [modeDidChangeNotification](../../uikit/uiscreen/modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [selectionDidChangeNotification](../../uikit/uitableview/selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
- [textDidBeginEditingNotification](../../uikit/uitextfield/textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [textDidChangeNotification](../../uikit/uitextfield/textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [textDidEndEditingNotification](../../uikit/uitextfield/textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
- [currentInputModeDidChangeNotification](../../uikit/uitextinputmode/currentinputmodedidchangenotification.md): A notification that posts when the current input mode changes.
- [textDidBeginEditingNotification](../../uikit/uitextview/textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [textDidChangeNotification](../../uikit/uitextview/textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [textDidEndEditingNotification](../../uikit/uitextview/textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
- [showDetailTargetDidChangeNotification](../../uikit/uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
- [didBecomeHiddenNotification](../../uikit/uiwindow/didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [didBecomeKeyNotification](../../uikit/uiwindow/didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [didBecomeVisibleNotification](../../uikit/uiwindow/didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [didResignKeyNotification](../../uikit/uiwindow/didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.
- [backgroundRefreshStatusDidChangeNotification](../../uikit/uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [didChangeStatusBarFrameNotification](../../uikit/uiapplication/didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [didChangeStatusBarOrientationNotification](../../uikit/uiapplication/didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.
- [willChangeStatusBarFrameNotification](../../uikit/uiapplication/willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [willChangeStatusBarOrientationNotification](../../uikit/uiapplication/willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [batteryLevelDidChangeNotification](../../uikit/uidevice/batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [batteryStateDidChangeNotification](../../uikit/uidevice/batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [orientationDidChangeNotification](../../uikit/uidevice/orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [stateChangedNotification](../../uikit/uidocument/statechangednotification.md): A notification the document object posts when there’s a change in the state of the document.
- [keyboardDidChangeFrameNotification](../../uikit/uiresponder/keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [keyboardDidHideNotification](../../uikit/uiresponder/keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](../../uikit/uiresponder/keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardWillChangeFrameNotification](../../uikit/uiresponder/keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](../../uikit/uiresponder/keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](../../uikit/uiresponder/keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.
- [didHideMenuNotification](../../uikit/uimenucontroller/didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [didShowMenuNotification](../../uikit/uimenucontroller/didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [menuFrameDidChangeNotification](../../uikit/uimenucontroller/menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.
- [willHideMenuNotification](../../uikit/uimenucontroller/willhidemenunotification.md): Deprecated. Posted by the menu controller just before it hides the menu.
- [willShowMenuNotification](../../uikit/uimenucontroller/willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [changedNotification](../../uikit/uipasteboard/changednotification.md): A notification that a pasteboard object posts when its contents change.
- [removedNotification](../../uikit/uipasteboard/removednotification.md): A notification that a pasteboard object posts just before an app removes it.
- [protectedDataDidBecomeAvailableNotification](../../uikit/uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](../../uikit/uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

### WatchKit

- [WKAccessibilityReduceMotionStatusDidChange](name-swift.struct/wkaccessibilityreducemotionstatusdidchange.md): Tells the interface controller that the reduce motion status has changed.
- [WKAudioFilePlayerItemDidPlayToEndTime](name-swift.struct/wkaudiofileplayeritemdidplaytoendtime.md): Deprecated. A notification that the item has played successfully to its end.
- [WKAudioFilePlayerItemFailedToPlayToEndTime](name-swift.struct/wkaudiofileplayeritemfailedtoplaytoendtime.md): Deprecated. A notification that the item failed to play to its end.
- [WKAudioFilePlayerItemTimeJumped](name-swift.struct/wkaudiofileplayeritemtimejumped.md): Deprecated. A notification that the item’s current time has changed discontinuously.

### WebKit

- [WebHistoryAllItemsRemoved](name-swift.struct/webhistoryallitemsremoved.md): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChanged](name-swift.struct/webhistoryitemchanged.md): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAdded](name-swift.struct/webhistoryitemsadded.md): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemoved](name-swift.struct/webhistoryitemsremoved.md): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoaded](name-swift.struct/webhistoryloaded.md): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySaved](name-swift.struct/webhistorysaved.md): Deprecated. Posted when web history items have been saved to a URL.
- [WebPreferencesChanged](name-swift.struct/webpreferenceschanged.md): Deprecated. Posted when the web preference settings are changed.
- [WebViewDidBeginEditing](name-swift.struct/webviewdidbeginediting.md): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChange](name-swift.struct/webviewdidchange.md): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelection](name-swift.struct/webviewdidchangeselection.md): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyle](name-swift.struct/webviewdidchangetypingstyle.md): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditing](name-swift.struct/webviewdidendediting.md): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChanged](name-swift.struct/webviewprogressestimatechanged.md): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinished](name-swift.struct/webviewprogressfinished.md): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStarted](name-swift.struct/webviewprogressstarted.md): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Accounts

- [ACAccountStoreDidChange](name-swift.struct/acaccountstoredidchange.md): Deprecated. Posted when the accounts managed by this account store changed in the database.

### Initializers

- [init(\_:)](name-swift.struct/init%28__%29.md)
- [init(rawValue:)](name-swift.struct/init%28rawvalue_%29.md)

### Type Properties

- [AVCaptureDeviceSubjectAreaDidChange](name-swift.struct/avcapturedevicesubjectareadidchange.md): Deprecated.
- [AVCaptureDeviceWasConnected](name-swift.struct/avcapturedevicewasconnected.md): Deprecated.
- [AVCaptureDeviceWasDisconnected](name-swift.struct/avcapturedevicewasdisconnected.md): Deprecated.
- [AVCaptureInputPortFormatDescriptionDidChange](name-swift.struct/avcaptureinputportformatdescriptiondidchange.md): Deprecated.
- [AVCaptureSessionDidStartRunning](name-swift.struct/avcapturesessiondidstartrunning.md): Deprecated.
- [AVCaptureSessionDidStopRunning](name-swift.struct/avcapturesessiondidstoprunning.md): Deprecated.
- [AVCaptureSessionInterruptionEnded](name-swift.struct/avcapturesessioninterruptionended.md): Deprecated.
- [AVCaptureSessionRuntimeError](name-swift.struct/avcapturesessionruntimeerror.md): Deprecated.
- [AVCaptureSessionWasInterrupted](name-swift.struct/avcapturesessionwasinterrupted.md): Deprecated.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChange](name-swift.struct/avplayerinterstitialeventmonitorassetlistresponsestatusdidchange.md): Deprecated.
- [AVPlayerInterstitialEventMonitorScheduleRequestCompleted](name-swift.struct/avplayerinterstitialeventmonitorschedulerequestcompleted.md)
- [AVPlayerItemDidPlayToEndTime](name-swift.struct/avplayeritemdidplaytoendtime.md): Deprecated.
- [AVPlayerItemFailedToPlayToEndTime](name-swift.struct/avplayeritemfailedtoplaytoendtime.md): Deprecated.
- [AVPlayerItemNewAccessLogEntry](name-swift.struct/avplayeritemnewaccesslogentry.md): Deprecated.
- [AVPlayerItemNewErrorLogEntry](name-swift.struct/avplayeritemnewerrorlogentry.md): Deprecated.
- [AVPlayerItemPlaybackStalled](name-swift.struct/avplayeritemplaybackstalled.md): Deprecated.
- [AVSampleBufferDisplayLayerReadyForDisplayDidChange](name-swift.struct/avsamplebufferdisplaylayerreadyfordisplaydidchange.md)
- [AXAnimatedImagesEnabledDidChange](name-swift.struct/axanimatedimagesenableddidchange.md): Deprecated.
- [AXPrefersHeadAnchorAlternativeDidChange](name-swift.struct/axprefersheadanchoralternativedidchange.md): Deprecated.
- [AXPrefersHorizontalTextLayoutDidChange](name-swift.struct/axprefershorizontaltextlayoutdidchange.md): Deprecated.
- [DRBurnProgressPanelDidFinish](name-swift.struct/drburnprogresspaneldidfinish.md)
- [DRBurnProgressPanelWillBegin](name-swift.struct/drburnprogresspanelwillbegin.md)
- [DRBurnStatusChanged](name-swift.struct/drburnstatuschanged.md)
- [DRDeviceAppeared](name-swift.struct/drdeviceappeared.md)
- [DRDeviceDisappeared](name-swift.struct/drdevicedisappeared.md)
- [DRDeviceStatusChanged](name-swift.struct/drdevicestatuschanged.md)
- [DREraseProgressPanelDidFinish](name-swift.struct/dreraseprogresspaneldidfinish.md)
- [DREraseProgressPanelWillBegin](name-swift.struct/dreraseprogresspanelwillbegin.md)
- [DREraseStatusChanged](name-swift.struct/drerasestatuschanged.md)
- [DRSetupPanelDeviceSelectionChanged](name-swift.struct/drsetuppaneldeviceselectionchanged.md)
- [GCSpatialAccessoryDidConnect](name-swift.struct/gcspatialaccessorydidconnect.md)
- [GCSpatialAccessoryDidDisconnect](name-swift.struct/gcspatialaccessorydiddisconnect.md)
- [GCStylusDidConnect](name-swift.struct/gcstylusdidconnect.md)
- [GCStylusDidDisconnect](name-swift.struct/gcstylusdiddisconnect.md)
- [HMCharacteristicPropertySupportsEvent](name-swift.struct/hmcharacteristicpropertysupportsevent.md)
- [MEVideoDecoderReadyForMoreMediaDataDidChange](name-swift.struct/mevideodecoderreadyformoremediadatadidchange.md)
- [NERelayConfigurationDidChange](name-swift.struct/nerelayconfigurationdidchange.md)
- [NEURLFilterConfigurationDidChange](name-swift.struct/neurlfilterconfigurationdidchange.md): Name of the NSNotification that is posted when the URL filter configuration changes.
- [NEURLFilterStatusDidChange](name-swift.struct/neurlfilterstatusdidchange.md): Name of the NSNotification that is posted when the URL filter status changes.
- [NSApplicationShouldBeginSuppressingHighDynamicRangeContent](name-swift.struct/nsapplicationshouldbeginsuppressinghighdynamicrangecontent.md)
- [NSApplicationShouldEndSuppressingHighDynamicRangeContent](name-swift.struct/nsapplicationshouldendsuppressinghighdynamicrangecontent.md)
- [NSProcessInfoPerformanceProfileDidChange](name-swift.struct/nsprocessinfoperformanceprofiledidchange.md)
- [NSSpellCheckerDidChangeAutomaticInlinePrediction](name-swift.struct/nsspellcheckerdidchangeautomaticinlineprediction.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Notifications

- [init(coder:)](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [init(name:object:)](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [init(name:object:userInfo:)](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.

# NSNotificationName (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure that defines the name of a notification.

## Declaration

```objectivec
typedef NSString * NSNotificationName;
```

## Topics

### AddressBook

- [kABDatabaseChangedNotification](../../addressbook/kabdatabasechangednotification.md): Posted when this process has changed the Address Book database.
- [kABDatabaseChangedExternallyNotification](../../addressbook/kabdatabasechangedexternallynotification.md): Posted when a process other than the current one has changed the Address Book database.
- [ABPeoplePickerDisplayedPropertyDidChangeNotification](../../addressbook/abpeoplepickerdisplayedpropertydidchangenotification.md): Posted when the displayed property in the record list is changed.
- [ABPeoplePickerGroupSelectionDidChangeNotification](../../addressbook/abpeoplepickergroupselectiondidchangenotification.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChangeNotification](../../addressbook/abpeoplepickernameselectiondidchangenotification.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChangeNotification](../../addressbook/abpeoplepickervalueselectiondidchangenotification.md): Posted when the selection in a multivalue property is changed.

### AppKit

- [NSTextContentStorageUnsupportedAttributeAddedNotification](../../uikit/nstextcontentstorageunsupportedattributeaddednotification.md): Posted by `NSTextContentStorage` when a text attribute unsupported by `NSTextContentStorage` is added to the underlying text storage.
- [NSTextStorageDidProcessEditingNotification](https://developer.apple.com/documentation/appkit/nstextstorage/didprocesseditingnotification): A notification that posts after a text storage finishes processing edits.
- [NSTextStorageWillProcessEditingNotification](https://developer.apple.com/documentation/appkit/nstextstorage/willprocesseditingnotification): A notification that posts before a text storage begins processing edits.
- [NSTextViewDidChangeSelectionNotification](https://developer.apple.com/documentation/appkit/nstextview/didchangeselectionnotification): Posted when the selected range of characters changes.
- [NSTextViewDidChangeTypingAttributesNotification](https://developer.apple.com/documentation/appkit/nstextview/didchangetypingattributesnotification): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewWillChangeNotifyingTextViewNotification](https://developer.apple.com/documentation/appkit/nstextview/willchangenotifyingtextviewnotification): Posted when a new text view is established as the text view that sends notifications.
- [NSToolbarDidRemoveItemNotification](https://developer.apple.com/documentation/appkit/nstoolbar/didremoveitemnotification): Posted after an item is removed from a toolbar.
- [NSToolbarWillAddItemNotification](https://developer.apple.com/documentation/appkit/nstoolbar/willadditemnotification): Posts before the toolbar adds a new item.
- [NSViewBoundsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/boundsdidchangenotification): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [NSViewDidUpdateTrackingAreasNotification](https://developer.apple.com/documentation/appkit/nsview/didupdatetrackingareasnotification): Posted whenever a view recalculates its tracking areas.
- [NSViewFocusDidChangeNotification](https://developer.apple.com/documentation/appkit/nsviewfocusdidchangenotification): Deprecated. Deprecated in macOS 10.4 and later. Posted for an `NSView` object and each of its descendants (recursively) whenever the frame or bounds geometry of the view changed.
- [NSViewFrameDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/framedidchangenotification): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSWindowDidBecomeKeyNotification](https://developer.apple.com/documentation/appkit/nswindow/didbecomekeynotification): A notification that the window object became the key window.
- [NSWindowDidBecomeMainNotification](https://developer.apple.com/documentation/appkit/nswindow/didbecomemainnotification): A notification that the window object became the main window.
- [NSWindowDidChangeBackingPropertiesNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangebackingpropertiesnotification): A notification that the window object backing properties changed.
- [NSWindowDidChangeOcclusionStateNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangeocclusionstatenotification): A notification that the window object’s occlusion state changed.
- [NSWindowDidChangeScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangescreennotification): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [NSWindowDidChangeScreenProfileNotification](https://developer.apple.com/documentation/appkit/nswindow/didchangescreenprofilenotification): A notification that the screen containing the window changed.
- [NSWindowDidDeminiaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/diddeminiaturizenotification): A notification that the window is no longer minimized.
- [NSWindowDidEndLiveResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didendliveresizenotification): A notification that the user resized the window object.
- [NSWindowDidEndSheetNotification](https://developer.apple.com/documentation/appkit/nswindow/didendsheetnotification): A notification that the window object closed an attached sheet.
- [NSWindowDidEnterFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didenterfullscreennotification): A notification that the window entered full-screen mode.
- [NSWindowDidEnterVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/didenterversionbrowsernotification): A notification that the window object entered version browser mode.
- [NSWindowDidExitFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/didexitfullscreennotification): A notification that the window object exited full-screen mode.
- [NSWindowDidExitVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/didexitversionbrowsernotification): A notification that the window object exited version browser mode.
- [NSWindowDidExposeNotification](https://developer.apple.com/documentation/appkit/nswindow/didexposenotification): A notification that a window exposed a portion of its nonretained content.
- [NSWindowDidMiniaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didminiaturizenotification): A notification that the window object minimized.
- [NSWindowDidMoveNotification](https://developer.apple.com/documentation/appkit/nswindow/didmovenotification): A notification that the window object moved.
- [NSWindowDidResignKeyNotification](https://developer.apple.com/documentation/appkit/nswindow/didresignkeynotification): A notification that the window object resigned its status as key window.
- [NSWindowDidResignMainNotification](https://developer.apple.com/documentation/appkit/nswindow/didresignmainnotification): A notification that the window object resigned its status as main window.
- [NSWindowDidResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/didresizenotification): A notification that the window object size changed.
- [NSWindowDidUpdateNotification](https://developer.apple.com/documentation/appkit/nswindow/didupdatenotification): A notification that the window object received an update message.
- [NSWindowWillBeginSheetNotification](https://developer.apple.com/documentation/appkit/nswindow/willbeginsheetnotification): A notification that the window object is about to open a sheet.
- [NSWindowWillCloseNotification](https://developer.apple.com/documentation/appkit/nswindow/willclosenotification): A notification that the window object is about to close.
- [NSWindowWillEnterFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/willenterfullscreennotification): A notification that the window will enter full-screen mode.
- [NSWindowWillEnterVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/willenterversionbrowsernotification): A notification that the window object will enter version browser mode.
- [NSWindowWillExitFullScreenNotification](https://developer.apple.com/documentation/appkit/nswindow/willexitfullscreennotification): A notification that the window object will exit full-screen mode.
- [NSWindowWillExitVersionBrowserNotification](https://developer.apple.com/documentation/appkit/nswindow/willexitversionbrowsernotification): A notification that the window object will exit version browser mode.
- [NSWindowWillMiniaturizeNotification](https://developer.apple.com/documentation/appkit/nswindow/willminiaturizenotification): A notification that the window object is about to minimize.
- [NSWindowWillMoveNotification](https://developer.apple.com/documentation/appkit/nswindow/willmovenotification): A notification that the window object is about to move.
- [NSWindowWillStartLiveResizeNotification](https://developer.apple.com/documentation/appkit/nswindow/willstartliveresizenotification): A notification that the user is about to resize the window.
- [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayoptionsdidchangenotification): A notification that the workspace posts when any of the accessibility display options change.
- [NSWorkspaceActiveSpaceDidChangeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/activespacedidchangenotification): A notification that the workspace posts when a Spaces change occurs.
- [NSWorkspaceDidActivateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didactivateapplicationnotification): A notification that the workspace posts when the Finder is about to activate an app.
- [NSWorkspaceDidChangeFileLabelsNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didchangefilelabelsnotification): A notification that the workspace posts when the Finder file labels or colors change.
- [NSWorkspaceDidDeactivateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/diddeactivateapplicationnotification): A notification that the workspace posts when the Finder deactivates an app.
- [NSWorkspaceDidHideApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didhideapplicationnotification): A notification that the workspace posts when the Finder hides an app.
- [NSWorkspaceDidLaunchApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didlaunchapplicationnotification): A notification that the workspace posts when a new app starts up.
- [NSWorkspaceDidMountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didmountnotification): A notification that the workspace posts when a new device mounts.
- [NSWorkspaceDidPerformFileOperationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didperformfileoperationnotification): Deprecated. Posted when a file operation has been performed in the receiving app.
- [NSWorkspaceDidRenameVolumeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didrenamevolumenotification): A notification that the workspace posts when a volume changes its name or mount path.
- [NSWorkspaceDidTerminateApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didterminateapplicationnotification): A notification that the workspace posts when an app finishes executing.
- [NSWorkspaceDidUnhideApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didunhideapplicationnotification): A notification that the workspace posts when the Finder unhides an app.
- [NSWorkspaceDidUnmountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didunmountnotification): A notification that the workspace posts when the Finder unmounts a device.
- [NSWorkspaceDidWakeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/didwakenotification): A notification that the workspace posts when the device wakes from sleep.
- [NSWorkspaceScreensDidSleepNotification](https://developer.apple.com/documentation/appkit/nsworkspace/screensdidsleepnotification): A notification that the workspace posts when the device’s screen goes to sleep.
- [NSWorkspaceScreensDidWakeNotification](https://developer.apple.com/documentation/appkit/nsworkspace/screensdidwakenotification): A notification that the workspace posts when the device’s screens wake.
- [NSWorkspaceSessionDidBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsworkspace/sessiondidbecomeactivenotification): A notification that the workspace posts after a user session switches in.
- [NSWorkspaceSessionDidResignActiveNotification](https://developer.apple.com/documentation/appkit/nsworkspace/sessiondidresignactivenotification): A notification that the workspace posts before a user session switches out.
- [NSWorkspaceWillLaunchApplicationNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willlaunchapplicationnotification): A notification that the workspace posts when the Finder is about to launch an app.
- [NSWorkspaceWillPowerOffNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willpoweroffnotification): A notification that the workspace posts when the user requests a logout or powers off the device.
- [NSWorkspaceWillSleepNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willsleepnotification): A notification that the workspace posts before the device goes to sleep.
- [NSWorkspaceWillUnmountNotification](https://developer.apple.com/documentation/appkit/nsworkspace/willunmountnotification): A notification that the workspace posts when the Finder is about to unmount a device.
- [NSColorListDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolorlist/didchangenotification): Posted whenever a color list changes.
- [NSColorListDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolorlist/didchangenotification): Posted whenever a color list changes.
- [NSComboBoxSelectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nscombobox/selectiondidchangenotification): Posted after the pop-up list selection of the `NSComboBox` changes.
- [NSComboBoxSelectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nscombobox/selectionischangingnotification): Posted whenever the pop-up list selection of the `NSComboBox` is changing.
- [NSComboBoxWillDismissNotification](https://developer.apple.com/documentation/appkit/nscombobox/willdismissnotification): Posted whenever the pop-up list of the `NSComboBox` is about to be dismissed.
- [NSComboBoxWillPopUpNotification](https://developer.apple.com/documentation/appkit/nscombobox/willpopupnotification): Posted whenever the pop-up list of the `NSComboBox` is going to be displayed.
- [NSContextHelpModeDidActivateNotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodedidactivatenotification): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.
- [NSContextHelpModeDidDeactivateNotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodediddeactivatenotification): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.
- [NSControlTextDidBeginEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidbegineditingnotification): Sent when a control with editable cells begins an edit session.
- [NSControlTextDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification): Sent when the text in the receiving control changes.
- [NSControlTextDidEndEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidendeditingnotification): Sent when a control with editable cells ends an editing session.
- [NSControlTintDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolor/currentcontroltintdidchangenotification): Deprecated. Sent after the user changes control tint preference.
- [NSDrawerDidCloseNotification](https://developer.apple.com/documentation/appkit/nsdrawer/didclosenotification): Deprecated. Posted whenever the drawer is closed.
- [NSDrawerDidOpenNotification](https://developer.apple.com/documentation/appkit/nsdrawer/didopennotification): Deprecated. Posted whenever the drawer is opened.
- [NSDrawerWillCloseNotification](https://developer.apple.com/documentation/appkit/nsdrawer/willclosenotification): Deprecated. Posted whenever the drawer is about to close.
- [NSDrawerWillOpenNotification](https://developer.apple.com/documentation/appkit/nsdrawer/willopennotification): Deprecated. Posted whenever the drawer is about to open.
- [NSFontCollectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nsfontcollection/didchangenotification): Posted whenever a font collection is changed.
- [NSFontSetChangedNotification](https://developer.apple.com/documentation/appkit/nsfont/fontsetchangednotification): Posted after the currently-set font changes.
- [NSImageRepRegistryDidChangeNotification](https://developer.apple.com/documentation/appkit/nsimagerep/registrydidchangenotification): Posted whenever the image representation class registry changes.
- [NSMenuDidAddItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didadditemnotification): Posted after a menu item is added to the menu.
- [NSMenuDidBeginTrackingNotification](https://developer.apple.com/documentation/appkit/nsmenu/didbegintrackingnotification): Posted when menu tracking begins.
- [NSMenuDidChangeItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didchangeitemnotification): Posted after a menu item in the menu changes appearance.
- [NSMenuDidEndTrackingNotification](https://developer.apple.com/documentation/appkit/nsmenu/didendtrackingnotification): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](https://developer.apple.com/documentation/appkit/nsmenu/didremoveitemnotification): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](https://developer.apple.com/documentation/appkit/nsmenu/didsendactionnotification): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](https://developer.apple.com/documentation/appkit/nsmenu/willsendactionnotification): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
- [NSOutlineViewColumnDidMoveNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidmovenotification): Posted whenever a column is moved by user action in an `NSOutlineView` object.
- [NSOutlineViewColumnDidResizeNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/columndidresizenotification): Posted whenever a column is resized in an `NSOutlineView` object.
- [NSOutlineViewItemDidCollapseNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemdidcollapsenotification): Posted whenever an item is collapsed in an `NSOutlineView` object.
- [NSOutlineViewItemDidExpandNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemdidexpandnotification): Posted whenever an item is expanded in an `NSOutlineView` object.
- [NSOutlineViewItemWillCollapseNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemwillcollapsenotification): Posted before an item is collapsed (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewItemWillExpandNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/itemwillexpandnotification): Posted before an item is expanded (after the user clicks the arrow but before the item is collapsed).
- [NSOutlineViewSelectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/selectiondidchangenotification): Posted after the outline view’s selection changes.
- [NSOutlineViewSelectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nsoutlineview/selectionischangingnotification): Posted as the outline view’s selection changes (while the mouse button is still down).
- [NSPopUpButtonCellWillPopUpNotification](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/willpopupnotification): This notification is posted just before a pop-up menu is attached to its window frame.
- [NSPopUpButtonWillPopUpNotification](https://developer.apple.com/documentation/appkit/nspopupbutton/willpopupnotification): Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.
- [NSPopoverDidCloseNotification](https://developer.apple.com/documentation/appkit/nspopover/didclosenotification): Sent after the popover has finished animating offscreen.
- [NSPopoverDidShowNotification](https://developer.apple.com/documentation/appkit/nspopover/didshownotification): Sent after the popover has finished animating onscreen.
- [NSPopoverWillCloseNotification](https://developer.apple.com/documentation/appkit/nspopover/willclosenotification): Sent before the popover is closed.
- [NSPopoverWillShowNotification](https://developer.apple.com/documentation/appkit/nspopover/willshownotification): Sent before the popover is shown.
- [NSPreferredScrollerStyleDidChangeNotification](https://developer.apple.com/documentation/appkit/nsscroller/preferredscrollerstyledidchangenotification): Posted if the preferred scroller style changes.
- [NSRuleEditorRowsDidChangeNotification](https://developer.apple.com/documentation/appkit/nsruleeditor/rowsdidchangenotification): This notification is posted to the default notification center whenever the view’s rows change.
- [NSScreenColorSpaceDidChangeNotification](https://developer.apple.com/documentation/appkit/nsscreen/colorspacedidchangenotification): Posted when the color space of the screen has changed.
- [NSScrollViewDidEndLiveMagnifyNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didendlivemagnifynotification): Posted at the end of a magnify gesture.
- [NSScrollViewDidEndLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didendlivescrollnotification): Posted on the main thread at the end of live scroll tracking.
- [NSScrollViewDidLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/didlivescrollnotification): Posted on the main thread after changing the clipview bounds origin due to a user-initiated event.
- [NSScrollViewWillStartLiveMagnifyNotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivemagnifynotification): Posted at the beginning of a magnify gesture.
- [NSScrollViewWillStartLiveScrollNotification](https://developer.apple.com/documentation/appkit/nsscrollview/willstartlivescrollnotification): Posted on the main thread at the beginning of user-initiated live scroll tracking (gesture scroll or scroller tracking, for example, thumb dragging).
- [NSSpellCheckerDidChangeAutomaticCapitalizationNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticcapitalizationnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticCapitalizationMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticcapitalizationmessage).
- [NSSpellCheckerDidChangeAutomaticDashSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticdashsubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticDashSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticdashsubstitutionmessage).
- [NSSpellCheckerDidChangeAutomaticPeriodSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticperiodsubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticPeriodSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticperiodsubstitutionmessage).
- [NSSpellCheckerDidChangeAutomaticQuoteSubstitutionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticquotesubstitutionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticQuoteSubstitutionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticquotesubstitutionmessage).
- [NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomaticspellingcorrectionnotification): This notification is posted when the spell checker did change text using automatic spell checking correction. The are posted to the application’s default notification center.
- [NSSpellCheckerDidChangeAutomaticTextReplacementNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextreplacementnotification): Posted when the spell checker changed text using automatic text replacement. This notification is posted to the app’s default notification center.
- [NSSplitViewDidResizeSubviewsNotification](https://developer.apple.com/documentation/appkit/nssplitview/didresizesubviewsnotification): A notification that posts after a change to the size of some or all subviews of a split view.
- [NSSplitViewWillResizeSubviewsNotification](https://developer.apple.com/documentation/appkit/nssplitview/willresizesubviewsnotification): A notification that posts before a change to the size of some or all subviews of a split view.
- [NSSystemColorsDidChangeNotification](https://developer.apple.com/documentation/appkit/nscolor/systemcolorsdidchangenotification): Sent when the system colors have changed, such as through a system control panel interface.
- [NSTableViewColumnDidMoveNotification](https://developer.apple.com/documentation/appkit/nstableview/columndidmovenotification): Posted whenever a column is moved by user action in an `NSTableView` object.
- [NSTableViewColumnDidResizeNotification](https://developer.apple.com/documentation/appkit/nstableview/columndidresizenotification): Posted whenever a column is resized in an `NSTableView` object.
- [NSTableViewSelectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nstableview/selectiondidchangenotification): Posted after an `NSTableView` object’s selection changes.
- [NSTableViewSelectionIsChangingNotification](https://developer.apple.com/documentation/appkit/nstableview/selectionischangingnotification): Posted as an `NSTableView` object’s selection changes (while the mouse button is still down).
- [NSTextAlternativesSelectedAlternativeStringNotification](https://developer.apple.com/documentation/appkit/nstextalternatives/selectedalternativestringnotification): Posted when the user selects an alternate string.
- [NSTextDidBeginEditingNotification](https://developer.apple.com/documentation/appkit/nstext/didbegineditingnotification): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [NSTextDidChangeNotification](https://developer.apple.com/documentation/appkit/nstext/didchangenotification): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextDidEndEditingNotification](https://developer.apple.com/documentation/appkit/nstext/didendeditingnotification): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextInputContextKeyboardSelectionDidChangeNotification](https://developer.apple.com/documentation/appkit/nstextinputcontext/keyboardselectiondidchangenotification): Posted after the selected text input source changes.
- [NSSpellCheckerDidChangeAutomaticTextCompletionNotification](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextcompletionnotification): To observe this notification using Swift concurrency, use [NSSpellChecker.DidChangeAutomaticTextCompletionMessage](https://developer.apple.com/documentation/appkit/nsspellchecker/didchangeautomatictextcompletionmessage).
- [NSApplicationDidBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/didbecomeactivenotification): Posted immediately after the app becomes active.
- [NSApplicationDidChangeOcclusionStateNotification](https://developer.apple.com/documentation/appkit/nsapplication/didchangeocclusionstatenotification): Posted when the app’s occlusion state changes.
- [NSApplicationDidChangeScreenParametersNotification](https://developer.apple.com/documentation/appkit/nsapplication/didchangescreenparametersnotification): Posted when the configuration of the displays attached to the computer is changed.
- [NSApplicationDidFinishLaunchingNotification](https://developer.apple.com/documentation/appkit/nsapplication/didfinishlaunchingnotification): Posted at the end of the [finishLaunching()](https://developer.apple.com/documentation/appkit/nsapplication/finishlaunching%28%29) method to indicate that the app has completed launching and is ready to run.
- [NSApplicationDidFinishRestoringWindowsNotification](https://developer.apple.com/documentation/appkit/nsapplication/didfinishrestoringwindowsnotification): Posted when the app has finished restoring windows.
- [NSApplicationDidHideNotification](https://developer.apple.com/documentation/appkit/nsapplication/didhidenotification): Posted at the end of the [hide(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/hide%28_:%29) method to indicate that the app is now hidden.
- [NSApplicationDidResignActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/didresignactivenotification): Posted immediately after the app gives up its active status to another app.
- [NSApplicationDidUnhideNotification](https://developer.apple.com/documentation/appkit/nsapplication/didunhidenotification): Posted at the end of the [unhideWithoutActivation()](https://developer.apple.com/documentation/appkit/nsapplication/unhidewithoutactivation%28%29) method to indicate that the app is now visible.
- [NSApplicationDidUpdateNotification](https://developer.apple.com/documentation/appkit/nsapplication/didupdatenotification): Posted at the end of the [updateWindows()](https://developer.apple.com/documentation/appkit/nsapplication/updatewindows%28%29) method to indicate that the app has finished updating its windows.
- [NSApplicationWillBecomeActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/willbecomeactivenotification): Posted immediately before the app becomes active.
- [NSApplicationWillFinishLaunchingNotification](https://developer.apple.com/documentation/appkit/nsapplication/willfinishlaunchingnotification): Posted at the start of the [finishLaunching()](https://developer.apple.com/documentation/appkit/nsapplication/finishlaunching%28%29) method to indicate that the app has completed its initialization process and is about to finish launching.
- [NSApplicationWillHideNotification](https://developer.apple.com/documentation/appkit/nsapplication/willhidenotification): Posted at the start of the [hide(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/hide%28_:%29) method to indicate that the app is about to be hidden.
- [NSApplicationWillResignActiveNotification](https://developer.apple.com/documentation/appkit/nsapplication/willresignactivenotification): Posted immediately before the app gives up its active status to another app.
- [NSApplicationWillTerminateNotification](https://developer.apple.com/documentation/appkit/nsapplication/willterminatenotification): Sends a notification to terminate the app.
- [NSApplicationWillUnhideNotification](https://developer.apple.com/documentation/appkit/nsapplication/willunhidenotification): Posted at the start of the [unhideWithoutActivation()](https://developer.apple.com/documentation/appkit/nsapplication/unhidewithoutactivation%28%29) method to indicate that the app is about to become visible.
- [NSApplicationWillUpdateNotification](https://developer.apple.com/documentation/appkit/nsapplication/willupdatenotification): Posted at the start of the [updateWindows()](https://developer.apple.com/documentation/appkit/nsapplication/updatewindows%28%29) method to indicate that the app is about to update its windows.
- [NSBrowserColumnConfigurationDidChangeNotification](https://developer.apple.com/documentation/appkit/nsbrowser/columnconfigurationdidchangenotification): Notifies the delegate when the width of a browser column has changed.
- [NSClassDescriptionNeededForClassNotification](name-swift.struct/nsclassdescriptionneededforclass.md): Posted by [classDescriptionForClass:](../nsclassdescription/init%28for_%29.md) when a class description cannot be found for a class.
- [NSApplicationProtectedDataDidBecomeAvailableNotification](https://developer.apple.com/documentation/appkit/nsapplicationprotecteddatadidbecomeavailablenotification): Posted when protected data becomes available.
- [NSApplicationProtectedDataWillBecomeUnavailableNotification](https://developer.apple.com/documentation/appkit/nsapplicationprotecteddatawillbecomeunavailablenotification): Posted when protected data is about to become unavailable.
- [NSAccessibilityAnnouncementRequestedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/announcementrequested): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
- [NSAccessibilityApplicationActivatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationactivated): This notification is posted after the app has been activated. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationDeactivatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationdeactivated): This notification is posted after the app has been deactivated. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationHiddenNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationhidden): This notification is posted after the app is hidden. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationShownNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/applicationshown): This notification is posted after the app is shown. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityCreatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/created): This notification is posted after an accessibility element is created. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityDrawerCreatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/drawercreated): This notification is posted after a drawer appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedUIElementChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/focuseduielementchanged): This notification is posted after an accessibility element gains focus. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedWindowChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/focusedwindowchanged): This notification is posted after the key window changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityHelpTagCreatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/helptagcreated): This notification is posted after a help tag appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityLayoutChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/layoutchanged): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [uiElements](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/uielements) and an array containing the UI elements that have been added or changed. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMainWindowChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/mainwindowchanged): This notification is posted after the main window changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMovedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/moved): This notification is posted after an accessibility element moves. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityResizedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/resized): This notification is posted after an accessibility element’s size changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCollapsedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowcollapsed): This notification is posted after a row collapses. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCountChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowcountchanged): This notification is posted after a row is added or deleted. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowExpandedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/rowexpanded): This notification is posted after a row expands. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedCellsChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedcellschanged): This notification is posted after one or more cells in a cell-based table are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedChildrenChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedchildrenchanged): This notification is posted after one or more child elements are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedChildrenMovedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedchildrenmoved): This notification is posted after the selected items in a layout area move. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedColumnsChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedcolumnschanged): This notification is posted after one or more columns are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedRowsChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedrowschanged): This notification is posted after one or more rows are selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedTextChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/selectedtextchanged): This notification is posted after text is selected or deselected. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySheetCreatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/sheetcreated): This notification is posted after a sheet appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityTitleChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/titlechanged): This notification is posted after an accessibility element’s title changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityUIElementDestroyedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/uielementdestroyed): This notification is posted after an accessibility element is destroyed. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityUnitsChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/unitschanged): This notification is posted after the units in a layout area change. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityValueChangedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/valuechanged): This notification is posted after an accessibility element’s value changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowCreatedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowcreated): This notification is posted after a new window appears. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowDeminiaturizedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowdeminiaturized): This notification is posted after a window is restored to full size from the Dock. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowMiniaturizedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowminiaturized): This notification is posted after a window is put in the Dock. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowMovedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowmoved): This notification is posted after a window moves. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowResizedNotification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/windowresized): This notification is posted after a window’s size changes. Post this notification using the [post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post%28element:notification:%29) function instead of an `NSNotificationCenter` instance.
- [NSAnimationProgressMarkNotification](https://developer.apple.com/documentation/appkit/nsanimation/progressmarknotification): Posted when the current progress of a running animation reaches one of its progress marks.
- [NSAntialiasThresholdChangedNotification](https://developer.apple.com/documentation/appkit/nsfont/antialiasthresholdchangednotification): Posted after the threshold for antialiasing changes.
- [NSViewGlobalFrameDidChangeNotification](https://developer.apple.com/documentation/appkit/nsview/globalframedidchangenotification): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.

### AVFAudio

- [AVAudioEngineConfigurationChangeNotification](../../avfaudio/avaudioengineconfigurationchangenotification.md): A notification the framework posts when the audio engine configuration changes.
- [AVAudioUnitComponentTagsDidChangeNotification](../../avfaudio/avaudiounitcomponenttagsdidchangenotification.md): A notification that indicates when component tags change.
- [AVAudioSessionInterruptionNotification](../../avfaudio/avaudiosession/interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
- [AVAudioSessionMediaServicesWereLostNotification](../../avfaudio/avaudiosession/mediaserviceswerelostnotification.md): A notification the system posts when it terminates the media server.
- [AVAudioSessionMediaServicesWereResetNotification](../../avfaudio/avaudiosession/mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
- [AVAudioSessionRouteChangeNotification](../../avfaudio/avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](../../avfaudio/avaudiosession/silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.

### AVFoundation

- [AVAssetChapterMetadataGroupsDidChangeNotification](../../avfoundation/avassetchaptermetadatagroupsdidchangenotification.md): Posted when the collection of arrays of timed metadata groups representing chapters of an AVAsset change and when any of the contents of the timed metadata groups change, but only for changes that occur after the status of the value of @“availableChapterLocales” has reached AVKeyValueStatusLoaded.
- [AVAssetContainsFragmentsDidChangeNotification](../../avfoundation/avassetcontainsfragmentsdidchangenotification.md): A notification the system posts when an asset’s fragments change.
- [AVAssetDurationDidChangeNotification](../../avfoundation/avassetdurationdidchangenotification.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset’s duration.
- [AVAssetMediaSelectionGroupsDidChangeNotification](../../avfoundation/avassetmediaselectiongroupsdidchangenotification.md): Posted when the collection of media selection groups provided by an AVAsset changes and when any of the contents of its media selection groups change, but only for changes that occur after the status of the value of @“availableMediaCharacteristicsWithMediaSelectionOptions” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackSegmentsDidChangeNotification](../../avfoundation/avassettracksegmentsdidchangenotification.md): Posted when the array of segments of an AVFragmentedAssetTrack changes while the associated instance of AVFragmentedAsset is being minded by an AVFragmentedAssetMinder, but only for changes that occur after the status of the value of @“segments” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackTimeRangeDidChangeNotification](../../avfoundation/avassettracktimerangedidchangenotification.md): Posted when the timeRange of an AVFragmentedAssetTrack changes while the associated instance of AVFragmentedAsset is being minded by an AVFragmentedAssetMinder, but only for changes that occur after the status of the value of @“timeRange” has reached AVKeyValueStatusLoaded.
- [AVAssetTrackTrackAssociationsDidChangeNotification](../../avfoundation/avassettracktrackassociationsdidchangenotification.md): Posted when the collection of track associations of an AVAssetTrack changes, but only for changes that occur after the status of the value of @“availableTrackAssociationTypes” has reached AVKeyValueStatusLoaded.
- [AVAssetWasDefragmentedNotification](../../avfoundation/avassetwasdefragmentednotification.md): A notification the system posts when a fragmented asset minder observes that the system defragments the asset on disk.
- [AVCaptureDeviceSubjectAreaDidChangeNotification](../../avfoundation/avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [AVCaptureDeviceWasConnectedNotification](../../avfoundation/avcapturedevice/wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](../../avfoundation/avcapturedevice/wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [AVCaptureInputPortFormatDescriptionDidChangeNotification](../../avfoundation/avcaptureinput/port/formatdescriptiondidchangenotification.md): A notification the system posts when the capture input port’s format description changes.
- [AVCaptureSessionDidStartRunningNotification](../../avfoundation/avcapturesession/didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [AVCaptureSessionDidStopRunningNotification](../../avfoundation/avcapturesession/didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [AVCaptureSessionInterruptionEndedNotification](../../avfoundation/avcapturesession/interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [AVCaptureSessionRuntimeErrorNotification](../../avfoundation/avcapturesession/runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
- [AVCaptureSessionWasInterruptedNotification](../../avfoundation/avcapturesession/wasinterruptednotification.md): A notification the system posts when it interrupts a capture session.
- [AVFragmentedMovieContainsMovieFragmentsDidChangeNotification](../../avfoundation/avfragmentedmoviecontainsmoviefragmentsdidchangenotification.md): Posted after the value of @“containsMovieFragments” has already been loaded and the AVFragmentedMovie is added to an AVFragmentedMovieMinder, either when 1) movie fragments are detected in the movie file on disk after it had previously contained none or when 2) no movie fragments are detected in the movie file on disk after it had previously contained one or more.
- [AVFragmentedMovieDurationDidChangeNotification](../../avfoundation/avfragmentedmoviedurationdidchangenotification.md): Posted when the duration of an AVFragmentedMovie changes while it’s being minded by an AVFragmentedMovieMinder, but only for changes that occur after the status of the value of @“duration” has reached AVKeyValueStatusLoaded.
- [AVFragmentedMovieTrackSegmentsDidChangeNotification](../../avfoundation/avfragmentedmovietracksegmentsdidchangenotification.md)
- [AVFragmentedMovieTrackTimeRangeDidChangeNotification](../../avfoundation/avfragmentedmovietracktimerangedidchangenotification.md)
- [AVFragmentedMovieWasDefragmentedNotification](../../avfoundation/avfragmentedmoviewasdefragmentednotification.md): Posted when the movie file on disk is defragmented while an AVFragmentedMovie is being minded by an AVFragmentedMovieMinder, but only if the defragmentation occurs after the status of the value of @“canContainMovieFragments” has reached AVKeyValueStatusLoaded.
- [AVPlayerAvailableHDRModesDidChangeNotification](../../avfoundation/avplayeravailablehdrmodesdidchangenotification.md): Deprecated. A notification that fires whenever availableHDRModes changes.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeNotification](../../avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.
- [AVPlayerItemDidPlayToEndTimeNotification](../../avfoundation/avplayeritem/didplaytoendtimenotification.md): A notification the system posts when a player item plays to its end time.
- [AVPlayerItemFailedToPlayToEndTimeNotification](../../avfoundation/avplayeritem/failedtoplaytoendtimenotification.md): A notification that the system posts when a player item fails to play to its end time.
- [AVPlayerItemNewAccessLogEntryNotification](../../avfoundation/avplayeritem/newaccesslogentrynotification.md): A notification the system posts when a player item adds a new entry to its access log.
- [AVPlayerItemNewErrorLogEntryNotification](../../avfoundation/avplayeritem/newerrorlogentrynotification.md): A notification the system posts when a player item adds a new entry to its error log.
- [AVPlayerItemPlaybackStalledNotification](../../avfoundation/avplayeritem/playbackstallednotification.md): A notification the system posts when a player item media doesn’t arrive in time to continue playback.
- [AVRouteDetectorMultipleRoutesDetectedDidChangeNotification](../../avfoundation/avroutedetectormultipleroutesdetecteddidchangenotification.md): A notification the system posts when changes occur to its detected routes.
- [AVSampleBufferAudioRendererOutputConfigurationDidChangeNotification](../../avfoundation/avsamplebufferaudiorendereroutputconfigurationdidchangenotification.md): A notification that indicates the hardware configuration does not match the enqueued data format.
- [AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification](../../avfoundation/avsamplebufferaudiorendererwasflushedautomaticallynotification.md): A notification that fires whenever the receiver’s enqueued media data has been flushed for a reason other than a call to the -flush method.
- [AVSampleBufferDisplayLayerFailedToDecodeNotification](../../avfoundation/avsamplebufferdisplaylayerfailedtodecodenotification.md): A notification the system posts when a sample buffer display layer fails to decode.
- [AVSampleBufferDisplayLayerOutputObscuredDueToInsufficientExternalProtectionDidChangeNotification](../../avfoundation/avsamplebufferdisplaylayeroutputobscuredduetoinsufficientexternalprotectiondidchangenotification.md)
- [AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification](../../avfoundation/avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification.md): A notification the system posts when a sample buffer display layer changes its decoding requirements.
- [AVPlayerItemTimeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.
- [AVFragmentedMovieTrackTotalSampleDataLengthDidChangeNotification](../../avfoundation/avfragmentedmovietracktotalsampledatalengthdidchangenotification.md): Deprecated.
- [AVPlayerItemTimeJumpedNotification](../../avfoundation/avplayeritem/timejumpednotification.md): A notification the system posts when a player item’s time changes discontinuously.

### AVKit

- [AVDisplayManagerModeSwitchSettingsChangedNotification](../../avkit/avdisplaymanagermodeswitchsettingschangednotification.md): Posted when the user settings for display criteria matching have changed.
- [AVDisplayManagerModeSwitchStartNotification](../../avkit/avdisplaymanagermodeswitchstartnotification.md): Posted when a display begins a display mode switch.
- [AVDisplayManagerModeSwitchEndNotification](../../avkit/avdisplaymanagermodeswitchendnotification.md): Posted when a display mode switch has completed.

### ClockKit

- [CLKComplicationServerActiveComplicationsDidChangeNotification](../../clockkit/clkcomplicationserveractivecomplicationsdidchangenotification.md): Deprecated. Posted when the set of active complications changes.

### CloudKit

- [CKAccountChangedNotification](../../cloudkit/ckaccountchangednotification.md): A notification that a container posts when the status of an iCloud account changes.

### Contacts

- [CNContactStoreDidChangeNotification](../../contacts/cncontactstoredidchangenotification.md): Posted when changes occur to the contact store.

### Core Data

- [NSManagedObjectContextDidSaveNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidsavenotification): A notification that posts after a context finishes writing unsaved changes.
- [NSManagedObjectContextObjectsDidChangeNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextobjectsdidchangenotification): A notification that posts when there are changes to context’s registered managed objects.
- [NSManagedObjectContextWillSaveNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextwillsavenotification): A notification that posts before a context writes unsaved changes.
- [NSPersistentStoreCoordinatorStoresDidChangeNotification](../../coredata/nspersistentstorecoordinatorstoresdidchangenotification.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorStoresWillChangeNotification](../../coredata/nspersistentstorecoordinatorstoreswillchangenotification.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorWillRemoveStoreNotification](../../coredata/nspersistentstorecoordinatorwillremovestorenotification.md): A notification that posts before a coordinator removes a store.
- [NSCoreDataCoreSpotlightDelegateIndexDidUpdateNotification](../../coredata/nscoredatacorespotlightdelegateindexdidupdatenotification.md)
- [NSManagedObjectContextDidMergeChangesObjectIDsNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidmergechangesobjectidsnotification)
- [NSManagedObjectContextDidSaveObjectIDsNotification](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidsaveobjectidsnotification): A notification that posts after a context finishes writing changes.
- [NSPersistentStoreRemoteChangeNotification](../../coredata/nspersistentstoreremotechangenotification.md)
- [NSPersistentStoreDidImportUbiquitousContentChangesNotification](../../coredata/nspersistentstoredidimportubiquitouscontentchangesnotification.md): Deprecated. Posted after records are imported from the ubiquitous content store.

### Core Telephony

- [CTServiceRadioAccessTechnologyDidChangeNotification](../../coretelephony/ctserviceradioaccesstechnologydidchangenotification.md)
- [CTRadioAccessTechnologyDidChangeNotification](../../coretelephony/ctradioaccesstechnologydidchangenotification.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.

### Core WLAN

- [CWBSSIDDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwbssiddidchangenotification): Deprecated.
- [CWCountryCodeDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwcountrycodedidchangenotification): Deprecated.
- [CWLinkDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwlinkdidchangenotification): Deprecated.
- [CWLinkQualityDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwlinkqualitydidchangenotification): Deprecated.
- [CWModeDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwmodedidchangenotification): Deprecated.
- [CWPowerDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwpowerdidchangenotification): Deprecated.
- [CWSSIDDidChangeNotification](https://developer.apple.com/documentation/corewlan/cwssiddidchangenotification): Deprecated.
- [CWScanCacheDidUpdateNotification](https://developer.apple.com/documentation/corewlan/cwscancachedidupdatenotification): Deprecated.

### EventKit

- [EKEventStoreChangedNotification](../../eventkit/ekeventstorechangednotification.md): A notification posted when changes are made to the Calendar database.

### External Accessory

- [EAAccessoryDidConnectNotification](../../externalaccessory/eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](../../externalaccessory/eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.

### File Provider

- [NSFileProviderDomainDidChange](../../fileprovider/nsfileproviderdomaindidchange.md): A notification that posts when a file provider’s domain changes.
- [NSFileProviderMaterializedSetDidChange](../../fileprovider/nsfileprovidermaterializedsetdidchange.md): A notification that the system posts when the set of materialized items changes for your file provider extension.
- [NSFileProviderPendingSetDidChange](../../fileprovider/nsfileproviderpendingsetdidchange.md): A notification that the system posts when the set of pending items changes for your file provider extension.

### Foundation

- [NSUbiquityIdentityDidChangeNotification](name-swift.struct/nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.
- [NSAppleEventManagerWillProcessFirstEventNotification](name-swift.struct/nsappleeventmanagerwillprocessfirstevent.md): Posted by `NSAppleEventManager` before it first dispatches an Apple event. Your application can use this notification to avoid registering any Apple event handlers until the first time at which they may be needed.
- [NSUndoManagerCheckpointNotification](name-swift.struct/nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidCloseUndoGroupNotification](name-swift.struct/nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerDidOpenUndoGroupNotification](name-swift.struct/nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerDidRedoChangeNotification](name-swift.struct/nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidUndoChangeNotification](name-swift.struct/nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillCloseUndoGroupNotification](name-swift.struct/nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerWillRedoChangeNotification](name-swift.struct/nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerWillUndoChangeNotification](name-swift.struct/nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSWillBecomeMultiThreadedNotification](name-swift.struct/nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector:toTarget:withObject:](../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start](../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.
- [NSBundleResourceRequestLowDiskSpaceNotification](name-swift.struct/nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.
- [NSCalendarDayChangedNotification](name-swift.struct/nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.
- [NSDidBecomeSingleThreadedNotification](name-swift.struct/nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSExtensionHostDidBecomeActiveNotification](name-swift.struct/nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackgroundNotification](name-swift.struct/nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForegroundNotification](name-swift.struct/nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.
- [NSExtensionHostWillResignActiveNotification](name-swift.struct/nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSFileHandleConnectionAcceptedNotification](name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailableNotification](name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletionNotification](name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.
- [NSHTTPCookieManagerAcceptPolicyChangedNotification](name-swift.struct/nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.
- [NSHTTPCookieManagerCookiesChangedNotification](name-swift.struct/nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
- [NSMetadataQueryDidFinishGatheringNotification](name-swift.struct/nsmetadataquerydidfinishgathering.md): Posted when the receiver has finished with the initial result-gathering phase of the query.
- [NSMetadataQueryDidStartGatheringNotification](name-swift.struct/nsmetadataquerydidstartgathering.md): Posted when the receiver begins with the initial result-gathering phase of the query.
- [NSMetadataQueryDidUpdateNotification](name-swift.struct/nsmetadataquerydidupdate.md): Posted when the receiver’s results have changed during the live-update phase of the query.
- [NSMetadataQueryGatheringProgressNotification](name-swift.struct/nsmetadataquerygatheringprogress.md): Posted as the receiver is collecting results during the initial result-gathering phase of the query.
- [NSProcessInfoPowerStateDidChangeNotification](name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.
- [NSSystemClockDidChangeNotification](name-swift.struct/nssystemclockdidchange.md): A notification posted whenever the system clock is changed.
- [NSSystemTimeZoneDidChangeNotification](name-swift.struct/nssystemtimezonedidchange.md): A notification posted when the time zone changes.
- [NSThreadWillExitNotification](name-swift.struct/nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit](../thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSURLCredentialStorageChangedNotification](name-swift.struct/nsurlcredentialstoragechanged.md): Deprecated. A notification posted when the set of stored credentials changes.

### Game Controller

- [GCControllerDidConnectNotification](../../gamecontroller/gccontrollerdidconnectnotification.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnectNotification](../../gamecontroller/gccontrollerdiddisconnectnotification.md): A notification that posts after a controller disconnects from the device.
- [GCControllerDidBecomeCurrentNotification](../../gamecontroller/gccontrollerdidbecomecurrentnotification.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrentNotification](../../gamecontroller/gccontrollerdidstopbeingcurrentnotification.md): A notification that posts when a controller stops being the current controller.
- [GCControllerUserCustomizationsDidChangeNotification](../../gamecontroller/gccontrollerusercustomizationsdidchangenotification.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
- [GCKeyboardDidConnectNotification](../../gamecontroller/gckeyboarddidconnectnotification.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnectNotification](../../gamecontroller/gckeyboarddiddisconnectnotification.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.
- [GCMouseDidBecomeCurrentNotification](../../gamecontroller/gcmousedidbecomecurrentnotification.md): A notification that posts when a mouse becomes the most recent mouse that the user connects.
- [GCMouseDidConnectNotification](../../gamecontroller/gcmousedidconnectnotification.md): A notification that posts after a mouse connects to the device.
- [GCMouseDidDisconnectNotification](../../gamecontroller/gcmousediddisconnectnotification.md): A notification that posts after a mouse disconnects from the device.
- [GCMouseDidStopBeingCurrentNotification](../../gamecontroller/gcmousedidstopbeingcurrentnotification.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.
- [GCRacingWheelDidConnectNotification](../../gamecontroller/gcracingwheeldidconnectnotification.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnectNotification](../../gamecontroller/gcracingwheeldiddisconnectnotification.md): A notification that posts after a racing wheel controller disconnects from the device.

### GameKit

- [GKPlayerAuthenticationDidChangeNotificationName](../../gamekit/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
- [GKPlayerDidChangeNotificationName](../../gamekit/gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.

### HealthKit

- [HKUserPreferencesDidChangeNotification](../../healthkit/hkuserpreferencesdidchangenotification.md): Notifies observers whenever the user changes his or her preferred units.

### IOBluetooth

- [IOBluetoothHostControllerPoweredOffNotification](https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontrollerpoweredoffnotification)
- [IOBluetoothHostControllerPoweredOnNotification](https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontrollerpoweredonnotification)
- [IOBluetoothL2CAPChannelPublishedNotification](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelpublishednotification)
- [IOBluetoothL2CAPChannelTerminatedNotification](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelterminatednotification)

### iTunes Library

- [ITLibraryDidChangeNotification](https://developer.apple.com/documentation/ituneslibrary/itlibrarydidchangenotification): This notification is sent to NSDistributedNotificationCenter when a change has occurred in the library.

### MapKit

- [MKAnnotationCalloutInfoDidChangeNotification](../../mapkit/mkannotationcalloutinfodidchangenotification.md): Deprecated. A property to observe to determine when the title or subtitle information of an annotation object changes.

### MediaPlayer

- [MPMusicPlayerControllerQueueDidChangeNotification](../../mediaplayer/mpmusicplayercontrollerqueuedidchangenotification.md): Indicates the music player’s queue changed.
- [MPMediaLibraryDidChangeNotification](../../mediaplayer/mpmedialibrarydidchangenotification.md): Indicates the media library has changed.
- [MPMediaPlaybackIsPreparedToPlayDidChangeNotification](../../mediaplayer/mpmediaplaybackispreparedtoplaydidchangenotification.md): Deprecated. Indicates that the prepared to play status of the media player has changed.
- [MPMusicPlayerControllerNowPlayingItemDidChangeNotification](../../mediaplayer/mpmusicplayercontrollernowplayingitemdidchangenotification.md): Posted when the currently playing media item has changed.
- [MPMusicPlayerControllerPlaybackStateDidChangeNotification](../../mediaplayer/mpmusicplayercontrollerplaybackstatedidchangenotification.md): Posted when the playback state changes programmatically or by user action.
- [MPMusicPlayerControllerVolumeDidChangeNotification](../../mediaplayer/mpmusicplayercontrollervolumedidchangenotification.md): Posted when the audio playback volume for the music player has changed.
- [MPMovieDurationAvailableNotification](../../mediaplayer/mpmoviedurationavailablenotification.md): Deprecated. Posted when the duration of a movie has been determined. There is no `userInfo` dictionary.
- [MPMovieMediaTypesAvailableNotification](../../mediaplayer/mpmoviemediatypesavailablenotification.md): Deprecated. Posted when the available media types in a movie are determined. There is no `userInfo` dictionary.
- [MPMovieNaturalSizeAvailableNotification](../../mediaplayer/mpmovienaturalsizeavailablenotification.md): Deprecated. Posted when the natural frame size of a movie is first determined or subsequently changes. There is no `userInfo` dictionary.
- [MPMoviePlayerDidEnterFullscreenNotification](../../mediaplayer/mpmovieplayerdidenterfullscreennotification.md): Deprecated. Posted when a movie player has entered full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerDidExitFullscreenNotification](../../mediaplayer/mpmovieplayerdidexitfullscreennotification.md): Deprecated. Posted when a movie player has exited full-screen mode. There is no `userInfo` dictionary.
- [MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification](../../mediaplayer/mpmovieplayerisairplayvideoactivedidchangenotification.md): Deprecated. Posted when a movie player has started or ended playing a movie via AirPlay. There is no `userInfo` dictionary.
- [MPMoviePlayerLoadStateDidChangeNotification](../../mediaplayer/mpmovieplayerloadstatedidchangenotification.md): Deprecated. Posted when a movie player’s network buffering state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerNowPlayingMovieDidChangeNotification](../../mediaplayer/mpmovieplayernowplayingmoviedidchangenotification.md): Deprecated. Posted when the currently playing movie has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerPlaybackDidFinishNotification](../../mediaplayer/mpmovieplayerplaybackdidfinishnotification.md): Deprecated. Posted when a movie has finished playing. The `userInfo` dictionary of this notification contains the [MPMoviePlayerPlaybackDidFinishReasonUserInfoKey](../../mediaplayer/mpmovieplayerplaybackdidfinishreasonuserinfokey.md) key, which indicates the reason that playback finished. This notification is also sent when playback fails because of an error.
- [MPMoviePlayerPlaybackStateDidChangeNotification](../../mediaplayer/mpmovieplayerplaybackstatedidchangenotification.md): Deprecated. Posted when a movie player’s playback state has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerReadyForDisplayDidChangeNotification](../../mediaplayer/mpmovieplayerreadyfordisplaydidchangenotification.md): Deprecated. Posted when the ready for display state changes.
- [MPMoviePlayerScalingModeDidChangeNotification](../../mediaplayer/mpmovieplayerscalingmodedidchangenotification.md): Deprecated. Posted when the scaling mode of a movie player has changed. There is no `userInfo` dictionary.
- [MPMoviePlayerThumbnailImageRequestDidFinishNotification](../../mediaplayer/mpmovieplayerthumbnailimagerequestdidfinishnotification.md): Deprecated. Posted when a request to capture a thumbnail from a movie has finished whether the request succeeded or failed. Upon successful capture of a thumbnail, the `userInfo` dictionary contains values for the following keys:
- [MPMoviePlayerTimedMetadataUpdatedNotification](../../mediaplayer/mpmovieplayertimedmetadataupdatednotification.md): Deprecated. Posted when new timed metadata arrives.
- [MPMoviePlayerWillEnterFullscreenNotification](../../mediaplayer/mpmovieplayerwillenterfullscreennotification.md): Deprecated. Posted when a movie player is about to enter full-screen mode.
- [MPMoviePlayerWillExitFullscreenNotification](../../mediaplayer/mpmovieplayerwillexitfullscreennotification.md): Deprecated. Posted when a movie player is about to exit full-screen mode.
- [MPMovieSourceTypeAvailableNotification](../../mediaplayer/mpmoviesourcetypeavailablenotification.md): Deprecated. Posted when the source type of a movie was previously unknown and is newly available. There is no `userInfo` dictionary.
- [MPVolumeViewWirelessRouteActiveDidChangeNotification](../../mediaplayer/mpvolumeviewwirelessrouteactivedidchangenotification.md): Deprecated. Indicates the active wireless route changed.
- [MPVolumeViewWirelessRoutesAvailableDidChangeNotification](../../mediaplayer/mpvolumeviewwirelessroutesavailabledidchangenotification.md): Deprecated. Indicates the available wireless routes changed.

### NetworkExtension

- [NEFilterConfigurationDidChangeNotification](../../networkextension/nefilterconfigurationdidchangenotification.md): Posted after the filter configuration stored in the Network Extension preferences changes.
- [NEVPNConfigurationChangeNotification](../../networkextension/nevpnconfigurationchangenotification.md): Posted after the VPN configuration stored in the Network Extension preferences changes.
- [NEVPNStatusDidChangeNotification](../../networkextension/nevpnstatusdidchangenotification.md): Posted when the status of the VPN connection changes.
- [NEDNSProxyConfigurationDidChangeNotification](../../networkextension/nednsproxyconfigurationdidchangenotification.md): A notification that is posted when the DNS proxy configuration changes.
- [NEDNSSettingsConfigurationDidChangeNotification](../../networkextension/nednssettingsconfigurationdidchangenotification.md)

### PassKit

- [PKPassLibraryDidChangeNotification](../../passkit/pkpasslibrarynotificationname/pkpasslibrarydidchange.md): A notification that PassKit posts when the pass library changes.
- [PKPassLibraryRemotePaymentPassesDidChangeNotification](../../passkit/pkpasslibrarynotificationname/pkpasslibraryremotepaymentpassesdidchange.md): A notification that PassKit posts when it adds or removes a pass on a paired remote device.

### PDFKit

- [PDFDocumentDidBeginFindNotification](../../pdfkit/pdfdocumentdidbeginfindnotification.md): A notification that the [beginFindString(\_:withOptions:)](../../pdfkit/pdfdocument/beginfindstring%28__withoptions_%29.md) or [findString(\_:withOptions:)](../../pdfkit/pdfdocument/findstring%28__withoptions_%29.md) method begins finding.
- [PDFDocumentDidBeginPageFindNotification](../../pdfkit/pdfdocumentdidbeginpagefindnotification.md): A notification that a find operation begins working on a new page of a document.
- [PDFDocumentDidBeginPageWriteNotification](../../pdfkit/pdfdocumentdidbeginpagewritenotification.md): A notification that a write operation begins working on a page in a document.
- [PDFDocumentDidBeginWriteNotification](../../pdfkit/pdfdocumentdidbeginwritenotification.md): A notification that a write operation begins working on a document.
- [PDFDocumentDidEndFindNotification](../../pdfkit/pdfdocumentdidendfindnotification.md): A notification that the [beginFindString(\_:withOptions:)](../../pdfkit/pdfdocument/beginfindstring%28__withoptions_%29.md) or [findString(\_:withOptions:)](../../pdfkit/pdfdocument/findstring%28__withoptions_%29.md) method returns.
- [PDFDocumentDidEndPageFindNotification](../../pdfkit/pdfdocumentdidendpagefindnotification.md): A notification that a find operation finishes working on a page in a document.
- [PDFDocumentDidEndPageWriteNotification](../../pdfkit/pdfdocumentdidendpagewritenotification.md): A notification that a write operation finishes working on a page in a document.
- [PDFDocumentDidEndWriteNotification](../../pdfkit/pdfdocumentdidendwritenotification.md): A notification that a write operation finishes working on a document.
- [PDFDocumentDidFindMatchNotification](../../pdfkit/pdfdocumentdidfindmatchnotification.md): A notification that a string match is found in a document.
- [PDFDocumentDidUnlockNotification](../../pdfkit/pdfdocumentdidunlocknotification.md): A notification that a document unlocks after a [unlock(withPassword:)](../../pdfkit/pdfdocument/unlock%28withpassword_%29.md) message.
- [PDFThumbnailViewDocumentEditedNotification](../../pdfkit/pdfthumbnailviewdocumenteditednotification.md)
- [PDFViewAnnotationHitNotification](../../pdfkit/pdfviewannotationhitnotification.md): A notification posted when the user clicks on an annotation.
- [PDFViewAnnotationWillHitNotification](../../pdfkit/pdfviewannotationwillhitnotification.md): A notification posted before the user clicks an annotation.
- [PDFViewChangedHistoryNotification](../../pdfkit/pdfviewchangedhistorynotification.md): A notification posted when the page history changes.
- [PDFViewCopyPermissionNotification](../../pdfkit/pdfviewcopypermissionnotification.md): A notification posted when the user attempts to copy to the pasteboard without the appropriate permissions.
- [PDFViewDisplayBoxChangedNotification](../../pdfkit/pdfviewdisplayboxchangednotification.md): A notification posted when the display box has changed.
- [PDFViewDisplayModeChangedNotification](../../pdfkit/pdfviewdisplaymodechangednotification.md): A notification posted when the display mode has changed.
- [PDFViewDocumentChangedNotification](../../pdfkit/pdfviewdocumentchangednotification.md): A notification posted when a new document is associated with the view.
- [PDFViewPageChangedNotification](../../pdfkit/pdfviewpagechangednotification.md): A notification posted when a new page becomes the current page.
- [PDFViewPrintPermissionNotification](../../pdfkit/pdfviewprintpermissionnotification.md): A notification posted when the user attempts to print without the appropriate permissions.
- [PDFViewScaleChangedNotification](../../pdfkit/pdfviewscalechangednotification.md): A notification posted when the scale factor changes.
- [PDFViewSelectionChangedNotification](../../pdfkit/pdfviewselectionchangednotification.md): A notification posted when the current selection has changed.
- [PDFViewVisiblePagesChangedNotification](../../pdfkit/pdfviewvisiblepageschangednotification.md): A notification posted when the visible pages have changed.

### PreferencePanes

- [NSPreferencePaneCancelUnselectNotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepanecancelunselectnotification): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneDoUnselectNotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepanedounselectnotification): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneSwitchToPaneNotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneswitchtopanenotification): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenuNotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneupdatehelpmenunotification): Notifies observers that your help menu content changed.
- [NSPreferencePrefPaneIsAvailableNotification](https://developer.apple.com/documentation/preferencepanes/nspreferenceprefpaneisavailablenotification): Notifies observers that the system preferences app is available to display your preferences.

### Quartz

- [IKFilterBrowserFilterDoubleClickNotification](https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterdoubleclicknotification): Posted when the user double-clicks a filter in the filter browser.
- [IKFilterBrowserFilterSelectedNotification](https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterselectednotification): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserWillPreviewFilterNotification](https://developer.apple.com/documentation/quartz/ikfilterbrowserwillpreviewfilternotification): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [kQuartzFilterManagerDidAddFilterNotification](https://developer.apple.com/documentation/quartz/kquartzfiltermanagerdidaddfilternotification)
- [kQuartzFilterManagerDidModifyFilterNotification](https://developer.apple.com/documentation/quartz/kquartzfiltermanagerdidmodifyfilternotification)
- [kQuartzFilterManagerDidRemoveFilterNotification](https://developer.apple.com/documentation/quartz/kquartzfiltermanagerdidremovefilternotification)
- [kQuartzFilterManagerDidSelectFilterNotification](https://developer.apple.com/documentation/quartz/kquartzfiltermanagerdidselectfilternotification)
- [QCCompositionPickerPanelDidSelectCompositionNotification](https://developer.apple.com/documentation/quartz/qccompositionpickerpaneldidselectcompositionnotification): Deprecated. Posted when the user chooses a composition.
- [QCCompositionPickerViewDidSelectCompositionNotification](https://developer.apple.com/documentation/quartz/qccompositionpickerviewdidselectcompositionnotification): Deprecated. Posted when the user selects a composition in the picker view.
- [QCCompositionRepositoryDidUpdateNotification](https://developer.apple.com/documentation/quartz/qccompositionrepositorydidupdatenotification): Deprecated. Posted whenever the list of compositions in the composition repository is updated.
- [QCViewDidStartRenderingNotification](https://developer.apple.com/documentation/quartz/qcviewdidstartrenderingnotification): Deprecated. Posted when the view starts rendering.
- [QCViewDidStopRenderingNotification](https://developer.apple.com/documentation/quartz/qcviewdidstoprenderingnotification): Deprecated. Posted when the view stops rendering.

### StoreKit

- [SKCloudServiceCapabilitiesDidChangeNotification](../../storekit/skcloudservicecapabilitiesdidchangenotification.md): Deprecated. A notification name for indicating a change in the capabilities associated with the Music library on the device.
- [SKStorefrontIdentifierDidChangeNotification](../../storekit/skstorefrontidentifierdidchangenotification.md): Deprecated. A notification name for indicating a change in the storefront identifier associated with the device.
- [SKStorefrontCountryCodeDidChangeNotification](../../storekit/skstorefrontcountrycodedidchangenotification.md): Deprecated. A notification name for indicating a change in the storefront country or region code associated with the device.

### TV Services

- [TVTopShelfItemsDidChangeNotification](../../tvservices/tvtopshelfitemsdidchangenotification.md): Deprecated. A notification to post when your app’s Top Shelf content has changed.

### UIKit

- [UIAccessibilityAnnouncementDidFinishNotification](../../uikit/uiaccessibility/announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [UIAccessibilityElementFocusedNotification](../../uikit/uiaccessibility/elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [UIAccessibilityAssistiveTouchStatusDidChangeNotification](../../uikit/uiaccessibility/assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [UIAccessibilityBoldTextStatusDidChangeNotification](../../uikit/uiaccessibility/boldtextstatusdidchangenotification.md): A notification that UIKit posts when the system’s Bold Text setting changes.
- [UIAccessibilityClosedCaptioningStatusDidChangeNotification](../../uikit/uiaccessibility/closedcaptioningstatusdidchangenotification.md): A notification that UIKit posts when the setting for Closed Captions + SDH changes.
- [UIAccessibilityDarkerSystemColorsStatusDidChangeNotification](../../uikit/uiaccessibility/darkersystemcolorsstatusdidchangenotification.md): A notification that UIKit posts when the system’s Increase Contrast setting changes.
- [UIAccessibilityGrayscaleStatusDidChangeNotification](../../uikit/uiaccessibility/grayscalestatusdidchangenotification.md): A notification that UIKit posts when the system’s Grayscale setting changes.
- [UIAccessibilityGuidedAccessStatusDidChangeNotification](../../uikit/uiaccessibility/guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [UIAccessibilityHearingDevicePairedEarDidChangeNotification](../../uikit/uiaccessibility/hearingdevicepairedeardidchangenotification.md): A notification that UIKit posts when there’s a change to the currently paired hearing devices.
- [UIAccessibilityInvertColorsStatusDidChangeNotification](../../uikit/uiaccessibility/invertcolorsstatusdidchangenotification.md): A notification that UIKit posts when the settings for inverted colors change.
- [UIAccessibilityMonoAudioStatusDidChangeNotification](../../uikit/uiaccessibility/monoaudiostatusdidchangenotification.md): A notification that UIKit posts when system audio changes from stereo to mono.
- [UIAccessibilityReduceMotionStatusDidChangeNotification](../../uikit/uiaccessibility/reducemotionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Motion setting changes.
- [UIAccessibilityReduceTransparencyStatusDidChangeNotification](../../uikit/uiaccessibility/reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [UIAccessibilityShakeToUndoDidChangeNotification](../../uikit/uiaccessibility/shaketoundodidchangenotification.md): A notification that UIKit posts when the system’s Shake to Undo setting changes.
- [UIAccessibilitySpeakScreenStatusDidChangeNotification](../../uikit/uiaccessibility/speakscreenstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Screen setting changes.
- [UIAccessibilitySpeakSelectionStatusDidChangeNotification](../../uikit/uiaccessibility/speakselectionstatusdidchangenotification.md): A notification that UIKit posts when the system’s Speak Selection setting changes.
- [UIAccessibilitySwitchControlStatusDidChangeNotification](../../uikit/uiaccessibility/switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [UIApplicationDidBecomeActiveNotification](../../uikit/uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](../../uikit/uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationDidFinishLaunchingNotification](../../uikit/uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.
- [UIApplicationDidReceiveMemoryWarningNotification](../../uikit/uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [UIApplicationSignificantTimeChangeNotification](../../uikit/uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.
- [UIApplicationUserDidTakeScreenshotNotification](../../uikit/uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.
- [UIApplicationWillEnterForegroundNotification](../../uikit/uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](../../uikit/uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](../../uikit/uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.
- [UIContentSizeCategoryDidChangeNotification](../../uikit/uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [UIDeviceProximityStateDidChangeNotification](../../uikit/uidevice/proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.
- [UIScreenBrightnessDidChangeNotification](../../uikit/uiscreen/brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [UIScreenDidConnectNotification](../../uikit/uiscreen/didconnectnotification.md): Deprecated. A notification the system posts when a new screen connects to the device.
- [UIScreenDidDisconnectNotification](../../uikit/uiscreen/diddisconnectnotification.md): Deprecated. A notification the system posts when a screen disconnects from the device.
- [UIScreenModeDidChangeNotification](../../uikit/uiscreen/modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [UITableViewSelectionDidChangeNotification](../../uikit/uitableview/selectiondidchangenotification.md): A notification that posts when the selected row in the posting table view changes.
- [UITextFieldTextDidBeginEditingNotification](../../uikit/uitextfield/textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text field.
- [UITextFieldTextDidChangeNotification](../../uikit/uitextfield/textdidchangenotification.md): A notification that alerts observers when the text in a text field changes.
- [UITextFieldTextDidEndEditingNotification](../../uikit/uitextfield/textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text field.
- [UITextInputCurrentInputModeDidChangeNotification](../../uikit/uitextinputmode/currentinputmodedidchangenotification.md): A notification that posts when the current input mode changes.
- [UITextViewTextDidBeginEditingNotification](../../uikit/uitextview/textdidbegineditingnotification.md): A notification that alerts observers when an editing session begins in a text view.
- [UITextViewTextDidChangeNotification](../../uikit/uitextview/textdidchangenotification.md): A notification that alerts observers when the text in a text view changes.
- [UITextViewTextDidEndEditingNotification](../../uikit/uitextview/textdidendeditingnotification.md): A notification that alerts observers when the editing session ends for a text view.
- [UIViewControllerShowDetailTargetDidChangeNotification](../../uikit/uiviewcontroller/showdetailtargetdidchangenotification.md): Posted when a split view controller is expanded or collapsed.
- [UIWindowDidBecomeHiddenNotification](../../uikit/uiwindow/didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [UIWindowDidBecomeKeyNotification](../../uikit/uiwindow/didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [UIWindowDidBecomeVisibleNotification](../../uikit/uiwindow/didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [UIWindowDidResignKeyNotification](../../uikit/uiwindow/didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.
- [UIApplicationBackgroundRefreshStatusDidChangeNotification](../../uikit/uiapplication/backgroundrefreshstatusdidchangenotification.md): A notification that posts when the app’s status for downloading content in the background changes.
- [UIApplicationDidChangeStatusBarFrameNotification](../../uikit/uiapplication/didchangestatusbarframenotification.md): Deprecated. Posted when the frame of the status bar changes.
- [UIApplicationDidChangeStatusBarOrientationNotification](../../uikit/uiapplication/didchangestatusbarorientationnotification.md): Deprecated. Posted when the orientation of the app’s user interface changes.
- [UIApplicationWillChangeStatusBarFrameNotification](../../uikit/uiapplication/willchangestatusbarframenotification.md): Deprecated. Posted when the app is about to change the frame of the status bar.
- [UIApplicationWillChangeStatusBarOrientationNotification](../../uikit/uiapplication/willchangestatusbarorientationnotification.md): Deprecated. Posted when the app is about to change the orientation of its interface.
- [UIDeviceBatteryLevelDidChangeNotification](../../uikit/uidevice/batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceBatteryStateDidChangeNotification](../../uikit/uidevice/batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [UIDeviceOrientationDidChangeNotification](../../uikit/uidevice/orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [UIDocumentStateChangedNotification](../../uikit/uidocument/statechangednotification.md): A notification the document object posts when there’s a change in the state of the document.
- [UIKeyboardDidChangeFrameNotification](../../uikit/uiresponder/keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [UIKeyboardDidHideNotification](../../uikit/uiresponder/keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](../../uikit/uiresponder/keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardWillChangeFrameNotification](../../uikit/uiresponder/keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](../../uikit/uiresponder/keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](../../uikit/uiresponder/keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.
- [UIMenuControllerDidHideMenuNotification](../../uikit/uimenucontroller/didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [UIMenuControllerDidShowMenuNotification](../../uikit/uimenucontroller/didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [UIMenuControllerMenuFrameDidChangeNotification](../../uikit/uimenucontroller/menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.
- [UIMenuControllerWillHideMenuNotification](../../uikit/uimenucontroller/willhidemenunotification.md): Deprecated. Posted by the menu controller just before it hides the menu.
- [UIMenuControllerWillShowMenuNotification](../../uikit/uimenucontroller/willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [UIPasteboardChangedNotification](../../uikit/uipasteboard/changednotification.md): A notification that a pasteboard object posts when its contents change.
- [UIPasteboardRemovedNotification](../../uikit/uipasteboard/removednotification.md): A notification that a pasteboard object posts just before an app removes it.
- [UIApplicationProtectedDataDidBecomeAvailable](../../uikit/uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](../../uikit/uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.

### WatchKit

- [WKAccessibilityReduceMotionStatusDidChangeNotification](https://developer.apple.com/documentation/watchkit/wkaccessibilityreducemotionstatusdidchangenotification): Tells the interface controller that the reduce motion status has changed.
- [WKAudioFilePlayerItemDidPlayToEndTimeNotification](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritemdidplaytoendtimenotification): Deprecated. A notification that the item has played successfully to its end.
- [WKAudioFilePlayerItemFailedToPlayToEndTimeNotification](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritemfailedtoplaytoendtimenotification): Deprecated. A notification that the item failed to play to its end.
- [WKAudioFilePlayerItemTimeJumpedNotification](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritemtimejumpednotification): Deprecated. A notification that the item’s current time has changed discontinuously.

### WebKit

- [WebHistoryAllItemsRemovedNotification](https://developer.apple.com/documentation/webkit/webhistoryallitemsremovednotification): Deprecated. Posted when all history items have been removed from the web history.
- [WebHistoryItemChangedNotification](https://developer.apple.com/documentation/webkit/webhistoryitemchangednotification): Deprecated. Posted by a WebHistoryItem object when the value of the history item’s title, alternate title, URL strings, or last visited interval changes.
- [WebHistoryItemsAddedNotification](https://developer.apple.com/documentation/webkit/webhistoryitemsaddednotification): Deprecated. Posted when history items have been added to a web history.
- [WebHistoryItemsRemovedNotification](https://developer.apple.com/documentation/webkit/webhistoryitemsremovednotification): Deprecated. Posted when items have been removed from the web history.
- [WebHistoryLoadedNotification](https://developer.apple.com/documentation/webkit/webhistoryloadednotification): Deprecated. Posted when web history items have been loaded from a URL.
- [WebHistorySavedNotification](https://developer.apple.com/documentation/webkit/webhistorysavednotification): Deprecated. Posted when web history items have been saved to a URL.
- [WebPreferencesChangedNotification](https://developer.apple.com/documentation/webkit/webpreferenceschangednotification): Deprecated. Posted when the web preference settings are changed.
- [WebViewDidBeginEditingNotification](https://developer.apple.com/documentation/webkit/webviewdidbegineditingnotification): Deprecated. Posted when a web view begins any operation that changes its contents in response to user editing.
- [WebViewDidChangeNotification](https://developer.apple.com/documentation/webkit/webviewdidchangenotification): Deprecated. Posted when a web view performs any operation that changes its contents in response to user editing.
- [WebViewDidChangeSelectionNotification](https://developer.apple.com/documentation/webkit/webviewdidchangeselectionnotification): Deprecated. Posted when a web view changes its typing selection.
- [WebViewDidChangeTypingStyleNotification](https://developer.apple.com/documentation/webkit/webviewdidchangetypingstylenotification): Deprecated. Posted when a web view changes its typing style.
- [WebViewDidEndEditingNotification](https://developer.apple.com/documentation/webkit/webviewdidendeditingnotification): Deprecated. Posted when a web view ends any operation that changes its contents in response to user editing.
- [WebViewProgressEstimateChangedNotification](https://developer.apple.com/documentation/webkit/webviewprogressestimatechangednotification): Deprecated. Posted by a WebView object when the estimated progress value of a load changes.
- [WebViewProgressFinishedNotification](https://developer.apple.com/documentation/webkit/webviewprogressfinishednotification): Deprecated. Posted by a WebView object when the load has finished.
- [WebViewProgressStartedNotification](https://developer.apple.com/documentation/webkit/webviewprogressstartednotification): Deprecated. Posted by a WebView object when a load begins, including a load that is initiated in a subframe.

### Accounts

- [ACAccountStoreDidChangeNotification](../../accounts/acaccountstoredidchangenotification.md): Deprecated. Posted when the accounts managed by this account store changed in the database.

### AssetsLibrary

- [ALAssetsLibraryChangedNotification](https://developer.apple.com/documentation/assetslibrary/alassetslibrarychangednotification): Sent when the contents of the assets library have changed from under the app that is using the data.

## See Also

### Creating Notifications

- [init](init.md): Initializes an empty notification.
- [initWithCoder:](init%28coder_%29.md): Initializes a notification with the data from an unarchiver.
- [notificationWithName:object:](init%28name_object_%29.md): Returns a new notification object with a specified name and object.
- [notificationWithName:object:userInfo:](notificationwithname_object_userinfo_.md): Returns a notification object with a specified name, object, and user information.
- [initWithName:object:userInfo:](init%28name_object_userinfo_%29.md): Initializes a notification with a specified name, object, and user information.
