> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js](https://developer.apple.com/documentation/installer_js)

# Installer JS

**Interface language:** Data

Manage and customize the installation and distribution experience.

<a id="overview"></a>

## Overview

A distribution definition file defines the install experience for a product. The Installer application opens and interprets distribution definition files to generate the user interface users manipulate to execute and customize a product install.

Distribution definition files contain XML and JavaScript code. The XML code defines the structure of a distribution, while the JavaScript code defines and manages install-time properties, such as installation options. [Distribution Definition XML Schema Reference](https://developer.apple.com/library/archive/documentation/DeveloperTools/Reference/DistributionDefinitionRef/Chapters/Introduction.html#//apple_ref/doc/uid/TP40005370) describes the XML schema used to define the structure of a distribution.

This document describes the object model that the JavaScript code in a distribution definition file can use to manage user input and system properties.

## Topics

### Classes

- [Applications](installer_js/applications.md): An object that provides methods to obtain information about running applications.
- [Choice](installer_js/choice.md): A single installation choice.
- [Files](installer_js/files.md): An object that provides methods for accessing files.
- [IORegistry](installer_js/ioregistry.md): An object that provides access to the IOKit registry.
- [ProcessInformation](installer_js/processinformation.md): A dictionary (associative array) describing an application.
- [Result](installer_js/result.md): An object that provides methods to obtain information about the result of an Installation Check or Volume Check script.
- [System](installer_js/system.md): An object that provides access to information about the target host.
- [Target](installer_js/target.md): An object that provides methods to obtain information about the installation volume.

## See Also

### Related Documentation

- [Distribution Definition XML Schema Reference](https://developer.apple.com/library/archive/documentation/DeveloperTools/Reference/DistributionDefinitionRef/Chapters/Introduction.html#//apple_ref/doc/uid/TP40005370)
