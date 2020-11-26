"use strict";

/**
 * APIのコントローラ実装を行うファイル。
 */
import { Response, Request } from "express";
// import {
//   ResourceJson,
//   AWSResourceAccessor,
// } from "../../resources/generic/AWSResourceAccessor";
// import { AppError } from "../../utils/AppError";

// const aWSResourceAccessor = new AWSResourceAccessor();

/**
 * リソースのヘッダー部の一覧を返却する。
 * @route GET /resources
 */
export const getResources = async (req: Request, res: Response) => {
  try {
//     const dbid = req.params.dbid;
//     const resourceJson = await aWSResourceAccessor.selectResources(dbid);
    res.send({ result : "getResources" });
  } catch (e) {
    // handleError(e,res)
  }
};

/**
 * リソースのヘッダー部の一覧を返却する。
 * @route GET /resources
 */
export const getResource = async (req: Request, res: Response) => {
    try {
  //     const dbid = req.params.dbid;
  //     const resourceJson = await aWSResourceAccessor.selectResources(dbid);
      res.send({ result : "getResource" });
    } catch (e) {
      // handleError(e,res)
    }
  };

  /**
 * リソースのヘッダー部の一覧を返却する。
 * @route GET /resources
 */
export const postDbid = async (req: Request, res: Response) => {
  try {
    const dbid = req.params.dbid;
    res.send({ dbid : dbid });
  } catch (e) {
    // handleError(e,res)
  }
};