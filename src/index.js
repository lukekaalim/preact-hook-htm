import { render, createElement } from 'preact';
import { useState, useEffect, useReducer, useRef } from 'preact/hooks';
import htm from 'htm';

const html = htm.bind(createElement);

export {
  html,
  render,
  useState,
  useEffect,
  useReducer,
  useRef,
};
