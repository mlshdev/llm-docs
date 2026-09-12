> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/roster-management](https://developer.apple.com/documentation/devicemanagement/roster-management)

# Roster management

**Interface language:** Data

**Framework:** Device Management  
**Kind:** API Collection

Manage classes for your students and teachers.

<a id="overview"></a>

## Overview

Administrators of Apple School Manager can use this API to access information about classes and people in their organization. If you’re a developer who needs access to information about somebody else’s organization, see the [Roster API](../rosterapi.md).

> **Note**

>  This API isn’t supported for Apple Business organizations.

## Topics

### Account management

- [Get Account Detail](account-detail.md): Obtain the details for your account.

### Class management

- [RosterClass](rosterclass.md): A class’s properties and their values.
- [Get the List of Classes](fetch-class-roster.md): Obtain a list of classes the server manages.
- [Sync the List of Classes](fetch-class-roster-sync.md): Get updates about the list of classes the server manages.

### People management

- [RosterPerson](rosterperson.md): A person’s properties and their values.
- [Get the List of People](fetch-person-roster.md): Obtain a list of people the server manages, across the organization.
- [Sync the List of People](fetch-person-roster-sync.md): Get updates about the list of people the server manages.

### Course management

- [BaseRosterCourse](baserostercourse.md): A base course’s properties and their values.
- [RosterCourse](rostercourse.md): A course’s properties and their values.
- [Get the List of Courses](fetch-course-roster.md): Obtain a list of the courses the server manages.
- [Sync the List of Courses](fetch-course-roster-sync.md): Get updates about the list of courses the server manages.

### Location management

- [BaseRosterLocation](baserosterlocation.md): A base location’s properties and their values.
- [RosterLocation](rosterlocation.md): A location’s properties and their values.
- [Get the List of Locations](fetch-location-roster.md): Obtain a list of the locations the server manages.
- [Sync the Locations](fetch-location-roster-sync.md): Get updates about the list of locations the server manages.

## See Also

### Deployment services

- [Device assignment](device-assignment.md): Manage devices for your students and employees.
- [App, Book, and Subscription Management](app-book-and-subscription-management.md): Manage apps, books, and subscriptions for your students and employees.
- [Apple School Manager and Apple Business APIs](../apple-school-and-business-manager-api.md): Automate device management actions and access data about devices that enroll using Automated Device Enrollment with the Apple School Manager and Apple Business APIs.
