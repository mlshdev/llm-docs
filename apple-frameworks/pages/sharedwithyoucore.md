> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore](https://developer.apple.com/documentation/sharedwithyoucore)

# Shared with You Core (Swift)

**Framework:** Shared with You Core  
**Kind:** Framework

Integrate custom collaboration with Messages, Mail, and FaceTime.

<a id="overview"></a>

## Overview

The Shared with You Core framework provides classes to collaborate and share documents directly with the Messages, Mail, and FaceTime apps. Use the classes in this framework to share content, create configurable collaboration settings, and manage participants.

The framework provides a customizable popover to your app to manage details of the collaboration and connect to conversations. The UI incorporates technologies you already use, like share sheet and drag and drop. An indicator in the share sheet header identifies a collaboration.

Use the [SWCollaborationCoordinator](sharedwithyoucore/swcollaborationcoordinator.md) to manage collaboration activities in your app. The [SWCollaborationMetadata](sharedwithyoucore/swcollaborationmetadata.md) objects contain the collaboration metadata with essential information like, identifiers, titles, and share option configuration that update the UI. To customize collaboration settings, use the [SWCollaborationOption](sharedwithyoucore/swcollaborationoption.md), [SWCollaborationOptionsGroup](sharedwithyoucore/swcollaborationoptionsgroup.md), and [SWCollaborationShareOptions](sharedwithyoucore/swcollaborationshareoptions.md) classes. These options appear in Messages, Mail, and FaceTime, providing people with the opportunity to make choices about permissions, access levels, and other collaboration parameters.

For more information on integrating with Messages, Mail, and FaceTime, see [Adding custom collaboration to your app](sharedwithyou/adding-custom-collaboration-to-your-app.md).

> **Note**

> Shared with You Core is a [Shared with You](sharedwithyou.md) framework.

## Topics

### Coordinate collaborations

- [SWCollaborationCoordinator](sharedwithyoucore/swcollaborationcoordinator.md): An object that contains the shared collaboration coordinator.

### Handle collaboration actions

- [SWAction](sharedwithyoucore/swaction.md): An object that represents a collaboration action.
- [SWCollaborationActionHandler](sharedwithyoucore/swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWStartCollaborationAction](sharedwithyoucore/swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](sharedwithyoucore/swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

### Register the collaboration metadata

- [SWCollaborationMetadata](sharedwithyoucore/swcollaborationmetadata.md): A model object for conveying data during a collaboration.

### Manage options in a collaboration

- [SWCollaborationOption](sharedwithyoucore/swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](sharedwithyoucore/swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](sharedwithyoucore/swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](sharedwithyoucore/swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](sharedwithyoucore/swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](sharedwithyoucore/utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

### Manage collaboration participants

- [SWPerson](sharedwithyoucore/swperson.md): An object that tracks participants in a collaboration.
- [SWCollaborationIdentifier](sharedwithyoucore/swcollaborationidentifier.md): A unique identifier for a collaboration.

# Shared with You Core (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Framework

Integrate custom collaboration with Messages, Mail, and FaceTime.

<a id="overview"></a>

## Overview

The Shared with You Core framework provides classes to collaborate and share documents directly with the Messages, Mail, and FaceTime apps. Use the classes in this framework to share content, create configurable collaboration settings, and manage participants.

The framework provides a customizable popover to your app to manage details of the collaboration and connect to conversations. The UI incorporates technologies you already use, like share sheet and drag and drop. An indicator in the share sheet header identifies a collaboration.

Use the [SWCollaborationCoordinator](sharedwithyoucore/swcollaborationcoordinator.md) to manage collaboration activities in your app. The [SWCollaborationMetadata](sharedwithyoucore/swcollaborationmetadata.md) objects contain the collaboration metadata with essential information like, identifiers, titles, and share option configuration that update the UI. To customize collaboration settings, use the [SWCollaborationOption](sharedwithyoucore/swcollaborationoption.md), [SWCollaborationOptionsGroup](sharedwithyoucore/swcollaborationoptionsgroup.md), and [SWCollaborationShareOptions](sharedwithyoucore/swcollaborationshareoptions.md) classes. These options appear in Messages, Mail, and FaceTime, providing people with the opportunity to make choices about permissions, access levels, and other collaboration parameters.

For more information on integrating with Messages, Mail, and FaceTime, see [Adding custom collaboration to your app](sharedwithyou/adding-custom-collaboration-to-your-app.md).

> **Note**

> Shared with You Core is a [Shared with You](sharedwithyou.md) framework.

## Topics

### Coordinate collaborations

- [SWCollaborationCoordinator](sharedwithyoucore/swcollaborationcoordinator.md): An object that contains the shared collaboration coordinator.

### Handle collaboration actions

- [SWAction](sharedwithyoucore/swaction.md): An object that represents a collaboration action.
- [SWCollaborationActionHandler](sharedwithyoucore/swcollaborationactionhandler.md): A delegate to handle incoming collaboration actions from a collaboration coordinator.
- [SWStartCollaborationAction](sharedwithyoucore/swstartcollaborationaction.md): An object that represents the first action sent to an app when the user shares a collaboration.
- [SWUpdateCollaborationParticipantsAction](sharedwithyoucore/swupdatecollaborationparticipantsaction.md): An action that contains the cryptographic identities the system uses to add to or remove from an existing collaboration.

### Register the collaboration metadata

- [SWCollaborationMetadata](sharedwithyoucore/swcollaborationmetadata.md): A model object for conveying data during a collaboration.

### Manage options in a collaboration

- [SWCollaborationOption](sharedwithyoucore/swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](sharedwithyoucore/swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](sharedwithyoucore/swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](sharedwithyoucore/swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [SWLocalCollaborationIdentifier](sharedwithyoucore/swlocalcollaborationidentifier.md): A local identifier for a collaboration.
- [UTCollaborationOptionsTypeIdentifier](sharedwithyoucore/utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

### Manage collaboration participants

- [SWPerson](sharedwithyoucore/swperson.md): An object that tracks participants in a collaboration.
- [SWCollaborationIdentifier](sharedwithyoucore/swcollaborationidentifier.md): A unique identifier for a collaboration.

### Track collaboration version information

- [SharedWithYouCoreVersionNumber](sharedwithyoucore/sharedwithyoucoreversionnumber.md): Project version number for Shared with You Core.
- [SharedWithYouCoreVersionString](sharedwithyoucore/sharedwithyoucoreversionstring.md): Project version string for Shared with You Core.

### Macros

- [SW_EXTERN](sharedwithyoucore/sw_extern.md)
- [SW_HIDDEN](sharedwithyoucore/sw_hidden.md)
